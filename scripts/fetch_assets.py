import os, urllib.parse, urllib.request

BASE = "https://raw.githubusercontent.com/cameronlockeladder/locke-ladder-brand-assets/main/"
PUB = "/app/frontend/public"

# remote_path -> local_path (relative to public)
ASSETS = {
    # Fonts (real Termina test files from brand repo)
    "brand/locke-ladder/TerminaTest-Heavy.woff2": "fonts/TerminaTest-Heavy.woff2",
    "brand/locke-ladder/TerminaTest-Medium.woff2": "fonts/TerminaTest-Medium.woff2",
    # Brand marks
    "brand/locke-ladder/locke-ladder-wordmark.webp": "brand/locke-ladder-wordmark.webp",
    "brand/locke-ladder/ll-icon.webp": "brand/ll-icon.webp",
    "brand/partners/brava/brava-new-logo-white.svg": "brand/brava-white.svg",
    "reviews/google/google-5-star.png": "brand/google-5-star.png",
    # Hero + project photography (real L&L jobs)
    "photos/projects/snape/front-elevation.jpg": "images/hero-home.jpg",
    "photos/projects/snape/hero-aerial.jpg": "images/snape-aerial.jpg",
    "photos/projects/snape/copper-detail.jpg": "images/roofing-copper.jpg",
    "photos/projects/snape/chimney-detail.jpg": "images/roof-chimney.jpg",
    "photos/projects/snape/dormer-detail.jpg": "images/roof-dormer.jpg",
    "photos/projects/snape/rear-courtyard.jpg": "images/home-courtyard.jpg",
    "photos/projects/locke-ladder-brava-cedar-projects/hickman-02.jpg": "images/brava-hickman.jpg",
    "photos/projects/locke-ladder-brava-cedar-projects/hickman-11.webp": "images/proof-hickman.webp",
    "photos/projects/locke-ladder-brava-cedar-projects/laskey-side-by-side-intro-to-brava-cedar-shot.webp": "images/brava-laskey.webp",
    "photos/materials/why-brava/brava-cedar-clarke-during-319-why-brava.webp": "images/why-brava.webp",
    # Team / crew / founder
    "photos/team/Collage People-2 - Jon Presenting.webp": "images/jon-strand.webp",
    "photos/team/Window Install House.webp": "images/windows-install.webp",
    "photos/team/Crew Window INstall.webp": "images/crew-window.webp",
    "photos/team/Crew Siding Install.webp": "images/siding-install.webp",
    "photos/team/Truck phot BW.webp": "images/truck-bw.webp",
}

os.makedirs(PUB, exist_ok=True)
for remote, local in ASSETS.items():
    url = BASE + urllib.parse.quote(remote)
    dest = os.path.join(PUB, local)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=60) as r:
            data = r.read()
        with open(dest, "wb") as f:
            f.write(data)
        print(f"OK {len(data):>9,}  {local}")
    except Exception as e:
        print(f"FAIL {local}: {e}")
