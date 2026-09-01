# PROJECT MANIFEST: World Composting Website

**Last updated:** 2026-09-01 (consolidated from `DESKTOP_LAYOUT_RESUME.md`, `TASKS.md`, and the old manifest)
**Status:** Desktop layout migration COMPLETE. All content pages live on `main` / GitHub Pages. Blog system live with 3 posts.

> **How to resume a session:** read this file, then pick up from "Pending Work" or whatever the user names. This is reference only: do not start work until the user explicitly names the task/page.

## 📌 Project Overview
High-legibility, ADA-compliant site for the [World Composting](http://worldcompost.com) YouTube channel (live at `www.worldcomposting.com`): SEO hub homepage, pillar guides, interactive beginner checklists with localStorage progress, troubleshooting guide, gear page with affiliate links, and a blog.

**Core values:** high contrast / accessibility first, data-driven JSON content, minimal maintenance, no broken deployments.

## 🛠 Tech Stack
- **Frontend:** HTML5 + CSS3 (`src/styles/theme.css` is the design source of truth; `article.css`, `video-section.css`) + vanilla JS.
- **Data layer:** `src/data/videos.json`, `src/data/products.json`, `src/data/blog.json`.
- **Deployment:** GitHub Pages, repo `WorldComposting/World_Composting`, branch `main` = live site.
- **Analytics:** GA4 `G-KRHYVJXZLE` on all pages; GSC verified (`google8a4b2c3d1e5f6789.html`).

## 🏗 Page Inventory (root, 31 files)
| Category | Pages |
|---|---|
| Hub / nav | `index.html` (SEO hub), `start-here.html` (decision tree), `quick_links.html` (Linktree-style mobile page for Instagram traffic: **never migrate or restyle**) |
| Pillar guides | `worm-composting.html`, `hot-composting.html`, `science-of-compost.html` |
| Checklists (localStorage progress) | `beginner.html` (worm), `bokashi.html`, `hot.html`, `tumbler.html`, `tea.html`, `lasagna.html`, `sustainability.html`, `zero-waste-kitchen.html`, `troubleshoot.html` |
| Deep-dive articles | worm: `worm-bedding`, `worm-forbidden-foods`, `worm-fruit-flies`, `worm-harvesting`; hot: `hot-best-materials`, `hot-cn-ratio`, `hot-not-heating`, `hot-speed-tips`; plus `biochar.html` (checklist + article) |
| Utility / JS-driven | `gear.html` (29 products, 8 categories), `glossary.html` (30 terms), `blog.html` (archive), `about.html`, `sitemap.html` |
| Not pages | `sample.html` (desktop layout template reference, gitignored local-only), `google8a4b2c3d1e5f6789.html` (GSC verification) |

**Blog posts:** `blog/<slug>.html` generated from `src/data/blog.json` by `scripts/generate_blog.py`. Runbook: see **`BLOG_WORKFLOW.md`** (gitignored; the only other doc in this project).

## 🖥 Desktop Layout System (current, all pages)
- **Structure:** sticky 240px sidebar nav + main content column, CSS grid `240px 1fr`, max-width 1200px. Breakpoints: 1024px (sidebar → horizontal bar), 640px (single column).
- **Sidebar rules (must match index.html byte-for-byte except the active marker):** section labels `<li class="sidebar-section-label">` for Guides / Checklists / Resources / Gear; relative paths (`href="start-here.html"`, never `/...`); no emojis in link text; exactly one `class="active"` per page (the current page). Pages not in nav get **no** active marker.
- **Class conventions:** `back-link-wide` for "← Back to Home"; `pillar-hero-wide` (centered H1 + italic `.subtitle`) for article/pillar headers; `hero-intro-wide`, `progress-wrapper-wide`, `phase phase-wide` on checklist pages; `article-section-wide` sections with TOC anchors; tables as `info-table-wide`; CTAs in `callout-wide tip`.
- **Page patterns:**
  - *Checklist:* phases + progress tracker (localStorage) + gear loader + video section.
  - *Article/deep-dive:* back-link → pillar hero → TOC → intro block → N sections; dead-checkbox lists converted to plain `<ol>`/`<ul>` (no JS on article pages).
  - *JS listing (gear):* keep page's own rendering logic, wrap in sidebar + wide grid.
- **Video embeds:** `#video-container-*` must be the last element of `<main>` (never inside footer); keys map to `videos.json`; empty by design where no key exists (`tumbler`, `tea`, etc.).
- **Footer:** clean full-width `<footer class="footer-wide">` after `.page-wrapper`.

## ⚠️ Automation Scripts — DO NOT RUN
`scripts/fetch_videos.py`, `sync_thumbnails.py`, `sync_products.py`: deprecated, repeatedly broke the site. Data files (`videos.json`, `products.json`) are updated **manually or via external processes only when explicitly directed by the user**. Exception: `scripts/generate_blog.py` is safe and idempotent (blog runbook).

## 📏 Standing Constraints
- **Em-dashes:** NEVER in new manuscript content; on this site, preserve existing em-dashes in visible text, use colons/commas/hyphens in comments only.
- **ADA / legibility:** high contrast is non-negotiable in any design change.
- **Gear page priority order:** Worm Bin Items → Worm Bag → Fly Control → Bokashi Items → rest alphabetical (verified in browser after any sort change).
- **Testing:** user runs a local server and verifies visually right after updates; expect immediate, high-accuracy fixes with agent-owned verification.

## 🐛 Known Issues / Deferred
- `blog.html` FAQPage JSON-LD is generic composting-basics content, not blog-specific (flagged 8/31, kept per preserve-schema rule). Fix when touching the blog archive.
- Blog: consider adding posts to `sitemap.html` once past ~5 posts; optional key-takeaways per video if inline captions feel thin.

## 📋 Pending Work (growth roadmap)
**Website expansion:** email capture / lead magnet ("Download the beginner composting guide"); expand `gear.html` into comparison guides with tables (capacity, material, ventilation, price, pros/cons); additional checklist pages (Water Conservation 101, Plastic-Free Living, Energy Efficiency at Home) with Recommended Gear sections; FAQ section for common questions.

**SEO / technical:** audit and fix all non-www URLs across HTML files (og:url, twitter:url, JSON-LD @id, robots.txt) so `www.worldcomposting.com` is everywhere; monthly low-CTR iteration on GSC data.

**Content & YouTube:** timelapse series (worms consuming items); bin vs bag comparison video; Shorts for SEO keywords (smelly bin fixes, fruit fly prevention); consistent upload cadence; optimize titles/descriptions, end screens/cards to site, branded thumbnails, playlists linked on site.

**Marketing / traffic:** Pinterest Business account + boards per method, 10–20 pins, 3–5 pins/day; Reddit presence (r/composting, r/gardening, r/sustainability, r/zerowaste) linking videos and checklists; Instagram behind-the-scenes; YouTube Community posts.

**Business ops:** review affiliate link performance quarterly + refresh `products.json`; ensure disclosures on all pages; explore more affiliate programs, digital products (printable checklists), sponsorships, Buy Me a Coffee / Patreon; GA4 traffic-source tracking with monthly content reviews.

**Sustainability book (separate project):** expand remaining chapters to ~3,000 words each; cross-pollinate blog posts into chapters; KDP self-publishing research. Manuscript files live in `/mnt/h/Hermes/scripts/`.

## 🔄 Development Workflow
- **This chat:** plans scope, reviews results, makes design/content decisions.
- **OpenCode (coding agent):** executes file changes via `opencode run` for larger coding tasks; small edits done directly here. See `world-composting-dev` skill.
- **Git:** work on a feature branch for risky multi-page changes; `main` = live site, never force-pushed. Commit only after user approval of the result (per-page during migration era; batched now that layout is stable).

## 📚 Migration Reference (condensed from DESKTOP_LAYOUT_RESUME.md)
Full per-page commit history and bug log preserved in git: `git log --oneline` on this repo. Key lessons if ever migrating a new page or restyling an existing one:
1. Remove any `<div id="app">` wrapper (theme.css constrains it to 720px, breaks white boxes).
2. Sidebar must be byte-identical to index.html except `class="active"`.
3. Use the `-wide` class variants listed above; verify with a browser check (clean console, no horizontal scroll, TOC anchors resolve, tag balance).
4. Preserve JSON-LD schemas and GA config during any rewrite (verify schema parses after edits).
5. WSL + H: drive is slow for inline python/heredocs: write helper scripts to `/tmp/*.py` instead.
