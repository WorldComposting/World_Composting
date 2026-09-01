#!/usr/bin/env python3
"""Generate blog/<slug>.html pages from src/data/blog.json.

Each JSON entry becomes a standalone desktop-layout article page in the blog/
subfolder, using the same wide-grid structure as the migrated content pages.
The sidebar and wide-CSS are pulled verbatim from a committed reference page so
generated posts stay byte-consistent with the rest of the site; only relative
paths are rewritten for the subfolder depth.

Usage:  python3 scripts/generate_blog.py
No network access required. Idempotent (overwrites blog/<slug>.html).
"""
import json
import os
import re
from datetime import datetime

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(BASE, "src", "data", "blog.json")
REF = os.path.join(BASE, "hot-best-materials.html")  # structural reference (article page)
OUT_DIR = os.path.join(BASE, "blog")

EXTRA_CSS = """
        /* ===== BLOG POST CONTENT OVERRIDES ===== */
        .post-meta {
            text-align: center;
            font-size: 0.85rem;
            color: var(--text-dark);
            opacity: 0.7;
            margin-top: -1.25rem;
            margin-bottom: 2rem;
        }

        .article-section-wide .video-embed { margin: 1.5rem 0; }
        .article-section-wide .video-embed iframe {
            width: 100%;
            aspect-ratio: 16 / 9;
            border: none;
            border-radius: 8px;
            display: block;
        }
        .article-section-wide .video-caption {
            font-size: 0.85rem;
            color: #666;
            margin-top: 0.5rem;
            line-height: 1.5;
        }

        /* Inline links inside article body */
        .article-section-wide a {
            color: var(--ocean-blue);
            font-weight: 500;
            text-decoration: none;
        }
        .article-section-wide a:hover { text-decoration: underline; }
"""


def slugify(text):
    s = re.sub(r"<[^>]+>", "", text)          # strip any inline tags
    s = re.sub(r"[^a-z0-9]+", "-", s.lower())  # non-alnum -> hyphen
    return s.strip("-")


def rewrite_rel_paths(html, prefix="../"):
    """Prefix relative .html hrefs and src/ asset paths for subfolder depth.
    Leaves http(s), root-relative (/...), and in-page (#...) anchors untouched."""
    html = re.sub(r'href="(?!http|/|#)([^"]+\.html)"', r'href="%s\1"' % prefix, html)
    html = re.sub(r'src="((?!http)[^"]*src/[^"]+)"', r'src="%s\1"' % prefix, html)
    return html


def build_toc_and_sections(content):
    """Split content on top-level <h2>; wrap each in an article-section-wide card.
    Returns (toc_html, sections_html)."""
    parts = re.split(r"(?=<h2>)", content, flags=re.S)

    toc_items = []
    seen_ids = set()
    section_blocks = []

    # Pre-h2 lead-in (rare; all current posts start with <h2>)
    lead = parts[0].strip() if parts else ""
    if lead:
        section_blocks.append('<div class="article-section-wide">\n' + lead + "\n</div>")

    for part in parts[1:]:
        m = re.search(r"<h2>(.*?)</h2>", part, flags=re.S)
        heading = m.group(1).strip() if m else "Section"
        base_id = slugify(heading) or "section"
        uid = base_id
        n = 2
        while uid in seen_ids:
            uid = "%s-%d" % (base_id, n)
            n += 1
        seen_ids.add(uid)

        toc_items.append('<li><a href="#%s">%s</a></li>' % (uid, heading))
        section_blocks.append(
            '<div class="article-section-wide" id="%s">\n%s\n</div>' % (uid, part.strip())
        )

    toc_html = ""
    if toc_items:
        toc_html = (
            '            <nav id="toc-wide" aria-label="Table of contents">\n'
            "                <h2>In This Article</h2>\n"
            "                <ol>\n" + "\n".join(toc_items) + "\n                </ol>\n"
            "            </nav>"
        )
    return toc_html, "\n\n".join(section_blocks)


def clean_content(content):
    """Normalize JSON content HTML for the desktop article layout."""
    # Restyle comparison tables to the site's wide table class
    content = content.replace('class="comparison-table"', 'class="info-table-wide"')
    # Remove non-functional checkboxes (dead on a static blog post)
    content = re.sub(r'<input type="checkbox"[^>]*>\s*', "", content)
    # Rewrite internal .html links for subfolder depth
    content = rewrite_rel_paths(content, prefix="../")
    return content


def build_page(post):
    ref_html = open(REF).read()

    style_block = re.search(r"<style>.*?</style>", ref_html, flags=re.S).group(0)
    # Inject blog-specific CSS just before the closing </style>
    style_block = style_block.replace("</style>", EXTRA_CSS + "    </style>")

    sidebar = re.search(r'<aside class="sidebar">.*?</aside>', ref_html, flags=re.S).group(0)
    sidebar = rewrite_rel_paths(sidebar, prefix="../")

    title = post["title"]
    summary = post.get("summary", "")
    date_str = post.get("date", "")
    try:
        pretty_date = datetime.strptime(date_str, "%Y-%m-%d").strftime("%B %d, %Y")
    except ValueError:
        pretty_date = date_str

    content = clean_content(post["content"])
    toc_html, sections_html = build_toc_and_sections(content)

    # BlogPosting structured data for SEO
    ld = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": summary,
        "datePublished": date_str,
        "author": {"@type": "Organization", "name": "World Composting"},
        "publisher": {"@type": "Organization", "name": "World Composting"},
    }
    ld_json = json.dumps(ld, indent=2)

    page = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | World Composting</title>
    <meta name="description" content="{summary[:160]}">
    <!-- Google Search Console Verification -->
    <meta name="google-site-verification" content="google8a4b2c3d1e5f6789">
    <link rel="stylesheet" href="../src/styles/theme.css">
{style_block}
    <script type="application/ld+json">
{ld_json}
    </script>
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-KRHYVJXZLE"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){{dataLayer.push(arguments);}}
      gtag('js', new Date());
      gtag('config', 'G-KRHYVJXZLE');
    </script>
</head>
<body>
    <div class="page-wrapper">

        <!-- ===== SIDEBAR NAVIGATION (from reference, paths rewritten for blog/) ===== -->
{sidebar}

        <!-- ===== MAIN CONTENT AREA ===== -->
        <main class="main-content">

            <a href="../blog.html" class="back-link-wide">&#8592; Back to Blog</a>

            <!-- Hero Section -->
            <div class="pillar-hero-wide">
                <h1>{title}</h1>
                <p class="subtitle">{summary}</p>
            </div>

            <p class="post-meta">Published {pretty_date}</p>

{toc_html}

{sections_html}

        </main>

    </div><!-- .page-wrapper -->

    <!-- FOOTER: outside grid, spans full width -->
    <footer class="footer-wide">
        &copy; 2026 World Composting. All rights reserved.
    </footer>
</body>
</html>
"""
    return page


def main():
    posts = json.load(open(DATA))
    os.makedirs(OUT_DIR, exist_ok=True)
    written = []
    for post in posts:
        slug = post["slug"]
        out_path = os.path.join(OUT_DIR, f"{slug}.html")
        with open(out_path, "w") as f:
            f.write(build_page(post))
        written.append(f"blog/{slug}.html  ({post['title'][:50]})")
    print("Generated %d blog page(s):" % len(written))
    for w in written:
        print("  -", w)


if __name__ == "__main__":
    main()
