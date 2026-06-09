import os, re, glob, json, sys

ROOT = "/app/frontend"
SRC = os.path.join(ROOT, "src")
src_files = glob.glob(os.path.join(SRC, "**/*.js"), recursive=True) + glob.glob(os.path.join(SRC, "**/*.jsx"), recursive=True)
src_text = {f: open(f, encoding="utf-8").read() for f in src_files}
all_src = "\n".join(src_text.values())
html = open(os.path.join(ROOT, "public/index.html"), encoding="utf-8").read()

errors, oks = [], []

# 1) Banned contractor phrases + forbidden NAP/domain
banned = ["463-298-9989", "lockeandladder.com", "lockeandladder", "quality craftsmanship",
          "free estimate", "call today", "licensed and insured", "we are the best", "we're the best"]
low = (all_src + html).lower()
hit = [b for b in banned if b.lower() in low]
(errors.append("BANNED present: " + ", ".join(hit)) if hit else oks.append("No banned phrases / forbidden NAP / forbidden domain"))

# 2) Em dash
(errors.append("Em dash found") if ("\u2014" in all_src or "\u2014" in html) else oks.append("No em dashes"))

# 3) Emoji
emoji = re.compile("[\U0001F300-\U0001FAFF\U00002600-\U000027BF\U0001F1E6-\U0001F1FF\U00002190-\U000021FF\U00002B00-\U00002BFF]")
bad_emoji = [f for f, t in src_text.items() if emoji.search(t)]
(errors.append("Emoji in: " + ", ".join(bad_emoji)) if bad_emoji else oks.append("No emojis in source"))

# 4) Bad internal links
bad_links = [p for p in ['"/cost/"', '"/windows/"', "'/cost/'", "'/windows/'"] if p in all_src]
(errors.append("Bad link target: " + ", ".join(bad_links)) if bad_links else oks.append("No links to /cost/ or /windows/"))

# 5) Emergent badge/script removed from index.html
removed = []
for needle, label in [("emergent-badge", "emergent badge"), ("emergent-main.js", "emergent script"),
                      ("posthog", "posthog snippet"), ("assets.emergent.sh", "emergent assets")]:
    if needle in html:
        errors.append(f"index.html still contains {label}")
    else:
        removed.append(label)
if len(removed) == 4:
    oks.append("Emergent badge, script, posthog, and emergent assets all removed from index.html")

# 6) Staging robots noindex,nofollow in index.html + siteMeta
(oks.append("index.html robots = noindex,nofollow") if 'content="noindex,nofollow"' in html
 else errors.append("index.html robots not noindex,nofollow"))
sm = open(os.path.join(SRC, "data/siteMeta.js"), encoding="utf-8").read()
(oks.append("siteMeta ROBOTS defaults to staging") if 'ROBOTS = ROBOTS_STAGING' in sm
 else errors.append("siteMeta ROBOTS not defaulting to staging"))

# 7) Reveal does not hide content by default (no framer initial opacity:0; .reveal added via JS only)
rv = open(os.path.join(SRC, "components/Reveal.jsx"), encoding="utf-8").read()
if "framer-motion" in rv:
    errors.append("Reveal still imports framer-motion")
elif "classList.add(\"reveal\")" in rv and "useLayoutEffect" in rv:
    oks.append("Reveal adds hide-class only via JS (content visible by default)")
else:
    errors.append("Reveal pattern not verified")

# 8) FAQ data <-> schema builder mapping (structural). Both Faq.jsx and buildFaqPage read the same items.
sb = open(os.path.join(SRC, "components/seo/schemaBuilders.js"), encoding="utf-8").read()
ok_map = ("name: f.q" in sb and "text: f.a" in sb)
(oks.append("buildFaqPage maps q->name and a->text from the same data items used by Faq.jsx")
 if ok_map else errors.append("buildFaqPage mapping not verified"))

# 9) FAQ counts
home = open(os.path.join(SRC, "data/homePageData.js"), encoding="utf-8").read()
roof = open(os.path.join(SRC, "data/servicePages/roofing.js"), encoding="utf-8").read()
print(f"home FAQ entries (q:): {home.count('q:')}, roofing FAQ entries (q:): {roof.count('q:')}")

# 10) content.js removed; template files present
must_exist = ["data/siteMeta.js","data/homePageData.js","data/servicePages/roofing.js","data/servicePages/index.js",
              "templates/HomePageTemplate.jsx","templates/ServicePageTemplate.jsx","pages/Home.jsx","pages/ServicePage.jsx",
              "pages/ComingSoon.jsx","components/site/Nav.jsx","components/site/Footer.jsx","components/seo/schemaBuilders.js"]
missing = [m for m in must_exist if not os.path.exists(os.path.join(SRC, m))]
(errors.append("Missing required files: " + ", ".join(missing)) if missing else oks.append("All required template files present"))
(errors.append("content.js still present") if os.path.exists(os.path.join(SRC,"data/content.js")) else oks.append("Old content.js removed"))

# 11) No stale imports of @/data/content
stale = [f for f, t in src_text.items() if "@/data/content" in t]
(errors.append("Stale @/data/content import in: " + ", ".join(stale)) if stale else oks.append("No stale @/data/content imports"))

print("\nPASS:")
for o in oks: print("  +", o)
if errors:
    print("\nFAIL:")
    for e in errors: print("  -", e)
    sys.exit(1)
print("\nALL STATIC CHECKS PASSED")
