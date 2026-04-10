import os
import re
from datetime import datetime, timezone

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(BASE_DIR, ".."))

INDEX_PATH = os.path.join(ROOT_DIR, "index.html")
OUTPUT_PATH = os.path.join(BASE_DIR, "agent-i-ds.css")

# Extraction ranges (within index.html <style> block)
RANGES = [
    ("Design Tokens", 230, 6200),
    ("Badge / Avatar / AI Input", 19705, 27691),
    ("Button → Message Comp", 33329, 126342),
]


def extract_style_block(html):
    match = re.search(r"<style[^>]*>(.*?)</style>", html, re.S | re.I)
    if not match:
        return None
    return match.group(1)


def main():
    if not os.path.exists(INDEX_PATH):
        raise SystemExit(f"[sync-css] index.html not found: {INDEX_PATH}")

    with open(INDEX_PATH, "r", encoding="utf-8") as f:
        html = f.read()

    css = extract_style_block(html)
    if not css:
        raise SystemExit(
            "[sync-css] No <style> block found in index.html. "
            "If you moved CSS to external files, update sync-css.py accordingly."
        )

    css = css.replace("\r\n", "\n")

    parts = []
    for label, start, end in RANGES:
        if start >= len(css) or end > len(css):
            raise SystemExit(
                f"[sync-css] Range out of bounds for '{label}': {start}:{end} (len={len(css)})"
            )
        parts.append(css[start:end].strip())

    ts = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    header = f"""/* ============================================================
   agent-i-ds.css — Agent-i Design System
   Single source of truth: auto-extracted from index.html

   ⚠  DO NOT EDIT MANUALLY.
      Regenerate with:  python3 agent-i-design-system/sync-css.py

   Last synced : {ts}

   Extraction ranges (within index.html <style> block):
     • Design Tokens            : css[230   : 6,200]
     • Badge / Avatar / AI Input: css[19,705 : 27,691]
     • Button → Message Comp    : css[33,329 : 126,342]
   ============================================================ */
"""

    output = header + "\n\n" + "\n\n".join(parts) + "\n"

    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        f.write(output)

    print(f"[sync-css] Wrote {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
