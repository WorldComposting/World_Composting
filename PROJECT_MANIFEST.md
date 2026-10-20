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

## 🏗 Page Inventory (root, 32 files + 41 new)
|| Category | Pages |
||---|---|
|| Hub / nav | `index.html` (SEO hub), `start-here.html` (decision tree), `quick_links.html` (Linktree-style mobile page for Instagram traffic: **never migrate or restyle**) |
|| Pillar guides | `worm-composting.html`, `hot-composting.html`, `science-of-compost.html` |
|| Checklists (localStorage progress) | `beginner.html` (worm), `bokashi.html`, `hot.html`, `tumbler.html`, `tea.html`, `lasagna.html`, `sustainability.html`, `zero-waste-kitchen.html`, `troubleshoot.html`, `black_soldier_fly.html`, `energy-efficiency.html` |
|| Deep-dive articles | worm: `worm-bedding`, `worm-forbidden-foods`, `worm-fruit-flies`, `worm-harvesting`; hot: `hot-best-materials`, `hot-cn-ratio`, `hot-not-heating`, `hot-speed-tips`; plus `biochar.html` (checklist + article) |
|| Hub pages (8, local only 10/7) | `hub-worm-composting.html`, `hub-hot-composting.html`, `hub-bokashi.html`, `hub-biochar.html`, `hub-tumbler.html`, `hub-lasagna.html`, `hub-black-soldier-fly.html`, `hub-energy-efficiency.html` — each with hero, Start Here cards, Deep Dive Articles list, Gear & Products grid, Troubleshooting links; headers use `.subtitle-paren` CSS class |
|| Article pages (34+7 local only 10/7) | hot(4): `hot-best-materials`, `hot-cn-ratio`, `hot-not-heating`, `hot-speed-tips`; bokashi(4): `bokashi-em1-guide`, `bokashi-tea-usage`, `bokashi-not-heating`, `bokashi-best-materials`; biochar(4): `biochar-charging-guide`, `biochar-pyrolysis-science`, `biochar-soil-impact`, `biochar-best-materials`; tumbler(4): `tumbler-turning-schedule`, `tumbler-moisture-control`, `tumbler-not-heating`, `tumbler-best-materials`; lasagna(4): `lasagna-layer-thickness`, `lasagna-soil-building`, `lasagna-weed-suppression`, `lasagna-best-materials`; bsf(3): `bsf-breeding-bin`, `bsf-larvae-harvest`, `bsf-best-materials`; energy-efficiency(4): `energy-efficiency-compost-heating`, `energy-efficiency-water-conservation`, `energy-efficiency-reduce-waste-energy`, `energy-efficiency-soil-carbon-sequestration` — all first-person voice, canonical-tagged to worldcomposting.com |
|| Utility / JS-driven | `gear.html` (29 products, 8 categories), `glossary.html` (30 terms), `faq.html` (41 Q&A in 11 sections, accordion `<details>`, FAQPage JSON-LD; added 9/14), `blog.html` (archive), `about.html`, `sitemap.html` |
|| Not pages | `sample.html` (desktop layout template reference, gitignored local-only), `google8a4b2c3d1e5f6789.html` (GSC verification) |

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
**Website expansion:** email capture / lead magnet ("Download the beginner composting guide"); additional checklist pages (Plastic-Free Living) with Recommended Gear sections.

**✅ DONE 10/8 — Sidebar Hubs section + structural CSS grid fixes:** Added "Hubs" section to all ~57 content page sidebars; unified all sidebar formats to canonical STANDARD MULTI-LINE; fixed hub pages' active-link highlighting per-page; added missing `</aside>` tags and `<main>` wrappers to article pages (hot, biochar, tumbler, tea, lasagna, troubleshoot, electric_composter, sustainability, energy-efficiency, black_soldier_fly) that were rendering content below nav bar. Sitemap.xml regenerated with 73 entries; llms.txt patched with Hubs links. **✅ DONE 10/11 — Sidebar restructure COMPLETE & pushed live:** All 35 root-level `.html` pages updated to canonical sidebar-nav structure (Hubs → Gear 🛒 + Popular badge → Checklists → Troubleshooting / Deep Dives → Resources). Fixed `index.html` active state bug. Added visual separator (`<div class="sidebar-divider">`) above "Gear" on all pages with left-hand nav. Pushed to GitHub main branch (commit 55e8fdd, 76 files changed). CSS grid layout issue resolved — content no longer stacks below sidebar.

**SEO Improvements (from Copilot audit 10/6):**
- **✅ DONE — Expand homepage intro to 300–600 words** (`index.html` hero expanded from ~50 to ~460 words; first-person voice, no em-dashes, E-E-A-T trust signals: composting since 2015, YouTube channel, tested gear). Pushed live.
|- **✅ DONE — Create all 8 category hub pages** (10/7): `hub-worm-composting.html`, `hub-hot-composting.html`, `hub-bokashi.html`, `hub-biochar.html`, `hub-tumbler.html`, `hub-lasagna.html`, `hub-black-soldier-fly.html`, `hub-energy-efficiency.html`. Each has hero section, "Start Here" cards, Deep Dive Articles list, Gear & Products grid, Troubleshooting links. All headers use `.subtitle-paren` CSS class for parentheticals on new line in blue. **LIVE** — verified 10/11 via HTTP check (all 8 return 200).
|- **✅ DONE — Build all 34 missing article pages** (10/7): hot(4), bokashi(4), biochar(4), tumbler(4), lasagna(4), bsf(3), energy-efficiency(4). All first-person voice, canonical-tagged to worldcomposting.com. **LIVE** — verified 10/11 via HTTP check (all 27 return 200; manifest count of 34 includes some that were built but not yet deployed separately).
- **✅ DONE — Fix gear.html broken JS** (10/7): missing backtick on template literal line 618 crashed entire render script; zero items displayed. Committed `89ff3e5` and pushed live.
- **HIGH PRIORITY — Add author/expert block** to guide pages (years composting experience, YouTube presence, methodology philosophy). Builds E-E-A-T signals for Google's quality rater guidelines.
- **MEDIUM PRIORITY — Increase contextual internal linking** across all 30+ pages: link guides ↔ gear pages, glossary terms, troubleshooting tips, and related content. Currently minimal cross-linking exists.
- **MEDIUM PRIORITY — Create troubleshooting sub-hubs:** split `troubleshoot.html` into dedicated pages for "compost smells," "fruit flies," "excess moisture," "lack of heat" with links back to relevant guides.
- **LOW PRIORITY — Add comparison pages:** Bokashi vs Worm Composting, Hot vs Cold Composting, product comparisons (e.g., Urban Worm Bag vs Vermibag). These capture long-tail search queries.
- **LOW PRIORITY — Low-impact quick wins:** breadcrumbs on all pages, VideoObject schema for embedded YouTube videos, Article schema on long-form guides, estimated reading time display, last-updated date stamps, print-friendly checklist versions.

**📸 Images / Visual Content (NEW 10/7):** Site is excellent for AI crawlers and search engines but lacks images for human visitors. Need to add relevant photos throughout: composting process shots, gear close-ups, before/after comparisons, infographics. Priority: hub pages first (hero section images), then pillar guides, then checklists. Source: user's own YouTube video stills, Amazon product photos (self-hosted in `src/assets/gear/`), and original photography from composting projects.

**Black Soldier Fly checklist ✅ Completed & deployed 9/17:** `black_soldier_fly.html` created at root in standard checklist format (30 items across 5 phases, HowTo JSON-LD, localStorage prefix `bsf_`, gear section); new "BSF Items" category added to products.json; sidebar navigation wired across all pages; sitemap updated. **Energy Efficiency at Home ✅ Completed & deployed 9/17:** `energy-efficiency.html` created with 30 items across 3 phases (Easy → Moderate → Difficult/Expensive), HowTo JSON-LD, localStorage prefix `ee_`, gear section filtering "Home Efficiency"; sidebar navigation wired; sitemap updated. ~~FAQ section~~ DONE 9/14: `faq.html` shipped (commit 0a80601) — 41 questions in 11 accordion sections covering every method + troubleshooting + gear; FAQPage JSON-LD matches visible Q&A exactly; sidebar link added to all pages (Resources section); listed in sitemap.xml (priority 0.8) and sitemap.html.
**Gear page upgrade DONE 9/2:** gear.html now renders cards (photo + name + blurb + spec pill + affiliate button) from a new `src/data/gear-details.json` layer merged over products.json at render time (sheet stays untouched). Photos are the REAL product images pulled from each item's own Amazon listing (resolved via the affiliate link, self-hosted in `src/assets/gear/` as amz-*.jpg so nothing hotlinks; ~1.7MB total, 640px wide). KN95 Masks + Bug Zapper had dead amzn.to links (fixed 9/2 with new links from user: amzn.to/4zUcONo / amzn.to/4x7VFxl; item renamed "Bug Zapper Bulb" -> "Bug Zapper"); Bokashi Brother Bran link was also dead (replaced 9/2 with amzn.to/3UtLHsA, renamed to "Bokashi Bran"; bokashi.html checklist link updated too). All three fixes mirrored in scripts/products_source.csv so future sheet syncs don't revert them. Photos pulled from the actual listings. Vermibag/Meme's Worms use vendor-site og:image. ItemList JSON-LD populated with all 29 items. Category order preserved. Swap any photo later = replace file + update image field in gear-details.json. VERIFIED 9/9: full data-layer check passed (29 cards, all images serve HTTP 200, lazy-loaded) and user confirmed rendering on local server.

**SEO / technical:** ~~Audit and fix all non-www URLs~~ DONE 9/2: fixed og:url + twitter:url (zero-waste-kitchen.html), JSON-LD @id (worm-composting, hot-composting), robots.txt sitemap line; also normalized extensionless paths to .html to match live URLs. No canonical tags exist on any page (noted, left as-is). Remaining: monthly low-CTR iteration on GSC data.

**Content & YouTube:** timelapse series (worms consuming items); bin vs bag comparison video; Shorts for SEO keywords (smelly bin fixes, fruit fly prevention); consistent upload cadence; optimize titles/descriptions, end screens/cards to site, branded thumbnails, playlists linked on site.

**Marketing / traffic:** Reddit monitoring and posting handled directly by user when questions come up where they can link their content; Pinterest Business account + boards per method, 10–20 pins, **1–2 pins/week** (reduced from 3–5/week due to limited content volume); Instagram behind-the-scenes; YouTube Community posts. **Pinterest infographic pins DONE 9/18:** 5 pins created and posted (see `/mnt/h/Hermes/pinterest-assets/` for assets + `pin_posting_tracker.csv`). Pin creation guide: `PIN_CREATION_GUIDE.md`. Pinterest Base Code tag installed on all 32 pages for conversion tracking. **Substack newsletter CREATED 10/4:** free tier, bio set ("Composting made simple..."), no posts yet — content to be developed next session.

**Business ops:** review affiliate link performance quarterly + refresh `products.json`; ensure disclosures on all pages; explore more affiliate programs, digital products (printable checklists), sponsorships, Buy Me a Coffee / Patreon (BMC page LIVE as of 9/9, zero donations so far); GA4 traffic-source tracking with monthly content reviews. **Affiliate performance:** Sept ~$977 sales / $37.25 earnings; Oct ~$995 sales / $43.10 earnings — strong start. **New opportunity: paid presentations** on composting (with or without live demonstrations) — identify venues, schools, community centers, libraries that would want to book a speaker.

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

### Sidebar Navigation Pattern — Updated 10/9 (hub-energy-efficiency.html model)
> This is now the canonical reference for all hub pages. See `hub-energy-efficiency.html` as the working sample.

**Structure:** `<aside class="sidebar">` → `<ul class="sidebar-nav">` → section-labels + links + dividers → `</ul>` → `</aside>` → `<main>`. The `</aside>` MUST close before `<main>` starts, or content renders inside the nav panel.

**Section order (canonical):** Guides → Hubs → Gear → Checklists → Troubleshooting / Deep Dives → Resources. Each section separated by a divider:
```html
<li><div class="sidebar-divider"></div></li>
<li class="sidebar-section-label">Section Name</li>
```

**Gear link:** One prominent entry between Hubs and Checklists, styled inline:
```html
<li class="sidebar-section-label">Gear</li>
<li><a href="gear.html" style="color: var(--forest-green); font-weight: 700;">🛒 View All Gear →</a></li>
```

**Section headers:** `.sidebar-section-label` now has a left accent bar + subtle background (from `layout.css`):
```css
.sidebar-section-label {
    border-left: 3px solid var(--sage-green);
    background: rgba(45,90,39,0.06);
}
```

**Link spacing:** `.sidebar-nav a` padding reduced to `0.3rem 0.85rem`, radius `6px` (from `layout.css`). Tighter vertical rhythm = shorter sidebar without losing readability.

**Self-link rule:** Never link back to the current page's own URL from its nav. Remove `<li><a href="hub-energy-efficiency.html" class="active">...</a></li>` — use `class="active"` only on the *other* pages' navs pointing TO this one.

**Black Soldier Fly placement:** Goes in **Checklists** section (it's a composting-method setup guide), NOT in Troubleshooting/Deep Dives.

**Troubleshooting / Deep Dives section:** For long-form deep-dive articles that aren't checklist pages (Sustainability Journey, Energy Efficiency at Home, Zero Waste Kitchen). Separated from Checklists by a divider.

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
