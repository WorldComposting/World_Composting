# PROJECT MANIFEST: World Composting Website

**Last updated:** 2026-09-14 (FAQ page shipped; consolidated from `DESKTOP_LAYOUT_RESUME.md`, `TASKS.md`, and the old manifest)
**Status:** Desktop layout migration COMPLETE. All content pages live on `main` / GitHub Pages. Blog system live with 4 posts. FAQ page live (9/14).

> **How to resume a session:** read this file, then pick up from "Pending Work" or whatever the user names. This is reference only: do not start work until the user explicitly names the task/page.

## 📌 Project Overview
High-legibility, ADA-compliant site for the [World Composting](http://worldcompost.com) YouTube channel (live at `www.worldcomposting.com`): SEO hub homepage, pillar guides, interactive beginner checklists with localStorage progress, troubleshooting guide, gear page with affiliate links, and a blog.

**Core values:** high contrast / accessibility first, data-driven JSON content, minimal maintenance, no broken deployments.

## 🛠 Tech Stack
- **Frontend:** HTML5 + CSS3 (`src/styles/theme.css` is the design source of truth; `article.css`, `video-section.css`) + vanilla JS.
- **Data layer:** `src/data/videos.json`, `src/data/products.json`, `src/data/blog.json`.
- **Deployment:** GitHub Pages, repo `WorldComposting/World_Composting`, branch `main` = live site.
- **Analytics:** GA4 `G-KRHYVJXZLE` on all pages; GSC verified (`google8a4b2c3d1e5f6789.html`).

## 🏗 Page Inventory (root, 32 files)
| Category | Pages |
|---|---|
| Hub / nav | `index.html` (SEO hub), `start-here.html` (decision tree), `quick_links.html` (Linktree-style mobile page for Instagram traffic: **never migrate or restyle**) |
| Pillar guides | `worm-composting.html`, `hot-composting.html`, `science-of-compost.html` |
| Checklists (localStorage progress) | `beginner.html` (worm), `bokashi.html`, `hot.html`, `tumbler.html`, `tea.html`, `lasagna.html`, `sustainability.html`, `zero-waste-kitchen.html`, `troubleshoot.html`, `black_soldier_fly.html`, `energy-efficiency.html` |
| Deep-dive articles | worm: `worm-bedding`, `worm-forbidden-foods`, `worm-fruit-flies`, `worm-harvesting`; hot: `hot-best-materials`, `hot-cn-ratio`, `hot-not-heating`, `hot-speed-tips`; plus `biochar.html` (checklist + article) |
| Utility / JS-driven | `gear.html` (29 products, 8 categories), `glossary.html` (30 terms), `faq.html` (41 Q&A in 11 sections, accordion `<details>`, FAQPage JSON-LD; added 9/14), `blog.html` (archive), `about.html`, `sitemap.html` |
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
**Website expansion:** email capture / lead magnet ("Download the beginner composting guide"); additional checklist pages (Water Conservation 101, Plastic-Free Living) with Recommended Gear sections. **Black Soldier Fly checklist ✅ Completed & deployed 9/17:** `black_soldier_fly.html` created at root in standard checklist format (30 items across 5 phases, HowTo JSON-LD, localStorage prefix `bsf_`, gear section); new "BSF Items" category added to products.json; sidebar navigation wired across all pages; sitemap updated. **Energy Efficiency at Home ✅ Completed & deployed 9/17:** `energy-efficiency.html` created with 30 items across 3 phases (Easy → Moderate → Difficult/Expensive), HowTo JSON-LD, localStorage prefix `ee_`, gear section filtering "Home Efficiency"; sidebar navigation wired; sitemap updated. ~~FAQ section~~ DONE 9/14: `faq.html` shipped (commit 0a80601) — 41 questions in 11 accordion sections covering every method + troubleshooting + gear; FAQPage JSON-LD matches visible Q&A exactly; sidebar link added to all pages (Resources section); listed in sitemap.xml (priority 0.8) and sitemap.html.
**Gear page upgrade DONE 9/2:** gear.html now renders cards (photo + name + blurb + spec pill + affiliate button) from a new `src/data/gear-details.json` layer merged over products.json at render time (sheet stays untouched). Photos are the REAL product images pulled from each item's own Amazon listing (resolved via the affiliate link, self-hosted in `src/assets/gear/` as amz-*.jpg so nothing hotlinks; ~1.7MB total, 640px wide). KN95 Masks + Bug Zapper had dead amzn.to links (fixed 9/2 with new links from user: amzn.to/4zUcONo / amzn.to/4x7VFxl; item renamed "Bug Zapper Bulb" -> "Bug Zapper"); Bokashi Brother Bran link was also dead (replaced 9/2 with amzn.to/3UtLHsA, renamed to "Bokashi Bran"; bokashi.html checklist link updated too). All three fixes mirrored in scripts/products_source.csv so future sheet syncs don't revert them. Photos pulled from the actual listings. Vermibag/Meme's Worms use vendor-site og:image. ItemList JSON-LD populated with all 29 items. Category order preserved. Swap any photo later = replace file + update image field in gear-details.json. VERIFIED 9/9: full data-layer check passed (29 cards, all images serve HTTP 200, lazy-loaded) and user confirmed rendering on local server.

**SEO / technical:** ~~Audit and fix all non-www URLs~~ DONE 9/2: fixed og:url + twitter:url (zero-waste-kitchen.html), JSON-LD @id (worm-composting, hot-composting), robots.txt sitemap line; also normalized extensionless paths to .html to match live URLs. No canonical tags exist on any page (noted, left as-is). Remaining: monthly low-CTR iteration on GSC data.

**Content & YouTube:** timelapse series (worms consuming items); bin vs bag comparison video; Shorts for SEO keywords (smelly bin fixes, fruit fly prevention); consistent upload cadence; optimize titles/descriptions, end screens/cards to site, branded thumbnails, playlists linked on site.

**Marketing / traffic:** Reddit monitoring and posting handled directly by user as needed; Pinterest Business account + boards per method, 10–20 pins, 3–5 pins/day; Instagram behind-the-scenes; YouTube Community posts. **Pinterest infographic pins DONE 9/18:** 5 pins created and posted (see `/mnt/h/Hermes/pinterest-assets/` for assets + `pin_posting_tracker.csv`). Pin creation guide: `PIN_CREATION_GUIDE.md`. Pinterest Base Code tag installed on all 32 pages for conversion tracking.

**Business ops:** review affiliate link performance quarterly + refresh `products.json`; ensure disclosures on all pages; explore more affiliate programs, digital products (printable checklists), sponsorships, Buy Me a Coffee / Patreon (BMC page LIVE as of 9/9, zero donations so far); GA4 traffic-source tracking with monthly content reviews.

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

## 📐 File-Build Conventions (how to build pages going forward)
### CSS Architecture
- **`src/styles/theme.css`** — design tokens, colors, typography, base layout. Never modify per-page.
- **`src/styles/layout.css`** — extracted shared wide-layout rules: sidebar/page-wrapper/flex structure, footer, responsive breakpoints (1024px / 640px). Linked on all 30 live pages. Do NOT edit this file manually; regenerate from `theme.css` + inline blocks if structural changes are needed.
- **Inline `<style>` blocks** — page-specific overrides ONLY (.phase-wide, .hero-wide, .callout-wide, method-specific rules). Never duplicate selectors already in layout.css (sidebar, page-wrapper, body flex, @media breakpoints).

### CSS Link Order (every page)
```html
<link rel="stylesheet" href="src/styles/theme.css">
<link rel="stylesheet" href="src/styles/layout.css">
<style>/* page-specific overrides only */</style>
```

### Pages Excluded from layout.css
- `quick_links.html` — distinct mobile-first layout, never restyle or migrate
- `sitemap.html` — unique inline styles for sitemap rendering
- `sample.html` — gitignored local template reference
- `google8a4b2c3d1e5f6789.html`, `bing*.html` — verification files

### Sidebar Navigation Pattern
- Section labels: `<li class="sidebar-section-label">Guides</li>` etc.
- Links use relative paths (`href="start-here.html"`, never `/...`)
- Exactly one `class="active"` per page (the current page)
- New checklist pages go in the **Checklists** section, ordered by creation date or logical grouping
- Add nav links to ALL existing pages when creating a new page

### Interactive Wizard Pattern (start-here.html model)
- Steps use `.question-step-wide` class; JS toggles `.active` for visibility
- CSS MUST include both `display: none` on the base class AND `display: block` on `.active` — missing the active rule is a common bug
- Progress dots use `.progress-dot-wide`; needs `.active` and `.completed` states defined in CSS
- Results container uses `#results-container-wide` with same show/hide pattern

### Checklist Pages (beginner.html model)
- Phases: `<div class="phase phase-wide">` wrapping sections
- Progress tracker: localStorage keys prefixed per page (`bsf_`, `ee_`, etc.)
- Gear section: filters from `products.json` by category
- HowTo JSON-LD in `<script type="application/ld+json">`

### Blog Posts (blog/<slug>.html)
- Generated from `src/data/blog.json` via `scripts/generate_blog.py` — safe and idempotent
- Runbook: see **BLOG_WORKFLOW.md**
- Never run `fetch_videos.py`, `sync_thumbnails.py`, or `sync_products.py`

### Deployment Checklist (before pushing to main)
1. Verify CSS link order on all modified pages
2. Confirm no duplicate selectors between inline `<style>` and layout.css
3. Check sidebar nav consistency across all pages
4. Browser check: clean console, no horizontal scroll, TOC anchors resolve
5. Git commit with descriptive message; push to main (GitHub Pages auto-deploys)
