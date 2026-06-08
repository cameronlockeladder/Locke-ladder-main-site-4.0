import os
from PIL import Image

IMG_DIR = "/app/frontend/public/images"
MAX_W = 1920
results = []

for name in sorted(os.listdir(IMG_DIR)):
    path = os.path.join(IMG_DIR, name)
    if not os.path.isfile(path):
        continue
    try:
        im = Image.open(path)
        w, h = im.size
        fmt = im.format
        orig_size = os.path.getsize(path)
        changed = False
        # Downscale very large images
        if w > MAX_W:
            ratio = MAX_W / w
            new = im.resize((MAX_W, int(h * ratio)), Image.LANCZOS)
            im = new
            w, h = im.size
            changed = True
        # Re-encode large files
        if orig_size > 600_000 or changed:
            if fmt == "JPEG":
                im = im.convert("RGB")
                im.save(path, "JPEG", quality=80, optimize=True, progressive=True)
            elif fmt == "WEBP":
                im.save(path, "WEBP", quality=80, method=6)
            changed = True
        new_size = os.path.getsize(path)
        results.append((name, w, h, orig_size, new_size, changed))
    except Exception as e:
        results.append((name, "ERR", str(e), 0, 0, False))

print(f"{'file':38} {'w':>5} {'h':>5} {'orig':>10} {'new':>10}")
for name, w, h, o, n, c in results:
    print(f"{name:38} {str(w):>5} {str(h):>5} {o:>10,} {n:>10,} {'*' if c else ''}")

# Emit a JS-friendly dimensions map
print("\n--- DIMENSIONS MAP ---")
for name, w, h, o, n, c in results:
    if isinstance(w, int):
        print(f'"{name}": [{w}, {h}],')
