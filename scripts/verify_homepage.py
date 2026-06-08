import json, re, sys, pathlib

root = pathlib.Path("/app/frontend")
html = (root / "public/index.html").read_text(encoding="utf-8")
content = (root / "src/data/content.js").read_text(encoding="utf-8")
src_files = list(root.glob("src/**/*.js")) + list(root.glob("src/**/*.jsx"))
all_src = "\n".join(p.read_text(encoding="utf-8") for p in src_files)

errors, oks = [], []

# --- Extract FAQPage JSON-LD ---
blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S)
faq_block = None
for b in blocks:
    data = json.loads(b)
    if data.get("@type") == "FAQPage":
        faq_block = data
assert faq_block, "No FAQPage JSON-LD found"
qas = [(q["name"], q["acceptedAnswer"]["text"]) for q in faq_block["mainEntity"]]

# 1) FAQ count
if len(qas) == 8:
    oks.append("FAQPage has 8 questions")
else:
    errors.append(f"FAQPage has {len(qas)} questions, expected 8")

# 2) Each schema Q and A must appear verbatim in content.js (visible source)
for name, text in qas:
    if name not in content:
        errors.append(f"FAQ question not found verbatim in content.js: {name!r}")
    if text not in content:
        errors.append(f"FAQ answer not found verbatim in content.js: {name!r}")
if not any(e.startswith("FAQ") for e in errors):
    oks.append("All 8 FAQ questions and answers match content.js verbatim")

# 3) Review count parity (visible vs schema)
biz_block = None
for b in blocks:
    data = json.loads(b)
    if "@graph" in data:
        for node in data["@graph"]:
            t = node.get("@type")
            if (isinstance(t, list) and "LocalBusiness" in t) or t == "LocalBusiness":
                if "aggregateRating" in node:
                    biz_block = node
rc = biz_block["aggregateRating"]["reviewCount"]
rv = biz_block["aggregateRating"]["ratingValue"]
if rc == "229" and rv == "5.0":
    oks.append("Schema aggregateRating = 5.0 / 229")
else:
    errors.append(f"aggregateRating mismatch: {rv}/{rc}")
if "5.0 across 229 public reviews" in all_src:
    oks.append("Visible copy '5.0 across 229 public reviews' present")
else:
    errors.append("Visible '5.0 across 229 public reviews' copy missing")

# 4) Required schema types present
required_types = ["RoofingContractor","LocalBusiness","HomeAndConstructionBusiness","WebSite","WebPage","Dataset","FAQPage"]
for t in required_types:
    if f'"{t}"' in html:
        oks.append(f"Schema type present: {t}")
    else:
        errors.append(f"Missing schema type: {t}")

# 5) Required SEO meta
for needle, label in [
    ('rel="canonical" href="https://lockeladder.com/"', "canonical"),
    ('name="robots" content="index,follow"', "robots index,follow"),
    ('Premium Roofing, Siding, Windows &amp; Doors - Indianapolis &amp; Chicago | Locke &amp; Ladder', "title"),
    ('Premium roofing, siding, windows, doors, gutters, and exterior decisions for high-end homes in Indianapolis and Chicago suburbs. Real costs, no pressure.', "meta description"),
    ('property="og:type" content="website"', "og:type"),
]:
    (oks if needle in html else errors).append(f"meta {label}")

# 6) Banned strings anywhere
banned = ["463-298-9989", "lockeandladder.com", "lockeandladder", "quality craftsmanship", "free estimate", "call today", "licensed and insured"]
haystack = (all_src + html).lower()
for b in banned:
    if b.lower() in haystack:
        errors.append(f"BANNED string present: {b!r}")
if not any("BANNED" in e for e in errors):
    oks.append("No banned phrases/strings")

# 7) No em dash, no obvious emoji in source/content
if "\u2014" in all_src or "\u2014" in html:
    errors.append("Em dash (—) found")
else:
    oks.append("No em dashes")
emoji = re.compile("[\U0001F300-\U0001FAFF\U00002600-\U000027BF\U0001F1E6-\U0001F1FF]")
if emoji.search(all_src):
    errors.append("Emoji found in source")
else:
    oks.append("No emojis in source")

# 8) Bad internal links
for bad in ['to="/cost/"', 'to="/windows/"', 'href="/cost/"', 'href="/windows/"']:
    if bad in all_src:
        errors.append(f"Bad internal link: {bad}")
if not any(e.startswith("Bad internal") for e in errors):
    oks.append("No links to /cost/ or /windows/")

# 9) Required nav targets exist
for tgt in ['/cost-scope-index/', '/windows-doors/', '/start-here/']:
    (oks if f'"{tgt}"' in all_src else errors).append(f"nav target {tgt}")

print("PASS:")
for o in oks: print("  +", o)
if errors:
    print("\nFAIL:")
    for e in errors: print("  -", e)
    sys.exit(1)
print("\nALL CHECKS PASSED")
