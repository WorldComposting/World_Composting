# PROJECT MANIFEST: World Composting Landing Page

## 📌 Project Overview
**Goal:** A high-legibility, ADA-compliant "Linktree-style" landing page for the [World Composting](http://worldcompost.com) YouTube channel. The page showcases latest videos, Amazon product links, interactive beginner checklists for multiple composting methods, and a troubleshooting guide.
**Core Values:** High contrast (for accessibility), frequent automated updates, minimal maintenance, and comprehensive beginner resources.

## 📂 Project Root
`/mnt/h/Hermes/landing-page-fixed`

## 🛠 Tech Stack
- **Frontend:** HTML5, CSS3 (Custom Theme via `theme.css`), JavaScript.
- **Backend/Automation:** Python (for YouTube API scraping and thumbnail syncing).
- **Data Layer:** JSON (`videos.json`, `products.json`) acting as a lightweight database.
- **Deployment Target:** Static Web Hosting (GitHub Pages).

## 🏗 Architecture & Key Files
### Automation Scripts
- `scripts/fetch_videos.py`: Fetches latest videos from YouTube and updates `src/data/videos.json`.
- `scripts/sync_thumbnails.py`: Ensures thumbnails are locally available in `src/assets/thumbnails`.
- `scripts/sync_products.py`: Syncs `products.json` from Google Sheets CSV export (source of truth).

### Data Structure
- `src/data/videos.json`: List of processed video metadata.
- `src/data/products.json`: Curated list of Amazon affiliate products.

### Frontend Structure
- `index.html`: Main landing page (Linktree-style). Featured video, checklists, latest videos, and featured gear links.
- `gear.html`: Detailed gear list with category filtering and collapsible sections.
- `beginner.html`: 🪱 Worm Composting checklist (30 items, 5 phases).
- `bokashi.html`: 🍚 Bokashi Composting checklist.
- `hot.html`: 🔥 Hot Composting checklist.
- `tumbler.html`: 🔄 Tumbler Composting checklist.
- `tea.html`: 🍵 Compost Tea checklist.
- `lasagna.html`: 🥘 Lasagna/Sheet Mulching checklist.
- `sustainability.html`: 🌱 Sustainability Journey Checklist (tiered difficulty levels).
- `troubleshoot.html`: ⚠️ Troubleshooting diagnostic guide.
- `src/styles/theme.css`: Central source of truth for visual design and accessibility settings.
- `src/assets/`: Static assets including logo and thumbnails.
- `src/components/`: Reusable UI elements.

## ✅ Completed Milestones
||- [x] Initial project structure and folder hierarchy established.
||- [x] Python automation logic for video fetching and thumbnail syncing.
||- [x] Basic JSON-driven data pipeline implemented.
||- [x] Core CSS theme (High contrast/ADA focused) initialized.
||- [x] Unified branding across landing page and gear page via `theme.css`.
||- [x] Refactored `gear.html` to root for GitHub Pages visibility.
||- [x] Cleaned up redundant backups and duplicate files in project root.
||- [x] CSS responsive/mobile audit: fixed contrast, added breakpoints, focus styles, overflow guards.
||- [x] Synced `products.json` from Google Sheets CSV: fixed NaN to null, duplicate links, category ordering.
||- [x] Worm Composting beginner checklist with localStorage persistence and progress tracker.
||- [x] Bokashi Composting checklist (all food waste, EM-1 fermentation).
||- [x] Hot Composting checklist (thermophilic piles, 130-160°F targets).
||- [x] Tumbler Composting checklist (dual-chamber, small-space).
||- [x] Compost Tea checklist (aerated brewing, molasses feeding).
||- [x] Lasagna/Sheet Mulching checklist (no-dig beds, layer-by-layer).
||- [x] Troubleshooting diagnostic guide (smells, pests, moisture, breakdown).
||- [x] Index.html restructured: "Get Started" checklists above video feed for better newcomer onboarding.
||- [x] Video cards redesigned: compact thumbnails left of titles (140×79px), mobile-responsive.
||- [x] SEO Expansion: Increased word density and structured headers for all primary checklist pages.
||- [x] Semantic Refactor: Separated process names from product/playlist descriptors in `index.html` using `<span class="product-name">` and `<small class="playlist-title">`.
||- [x] Sitemap Implementation: Created production-ready `sitemap.xml` for improved search engine crawling.
|||- [x] Git Cleanup: Added `PROJECT_MANIFEST.md` to `.gitignore` and removed from tracking.
|||- [x] Featured video card semantic wrapper applied (`<span class="product-name">` + `<small class="playlist-title">Latest Video</small>`).
|||- [x] Playlist cards JS template updated with consistent semantic wrappers (`<small class="playlist-title">Playlist</small>`).
|||- [x] CSS cleanup: Replaced orphaned `.video-title` styles with proper `.product-name` and new `.playlist-title` rules; merged duplicate `.video-info` blocks.
|||- [x] Mobile responsive breakpoint updated for `.product-name`.
|||- [x] Header logo fix across all 8 checklist pages (hot, sustainability, beginner, bokashi, biochar, lasagna, tea): replaced large YouTube logo with smaller centered home image (50×50px) above "← Back to Home" text; changed `.back-link` from `inline-block` to `block`.

## 📋 Pending Changes
### Phase 1 — Quick SEO Wins
|| # | Task | Source | Effort |
||---|------|--------|--------|
|| 5 | Create pillar pages: "Complete Guide to Worm Composting", "Hot Composting Guide" (1,500–3,000 words each) | Copilot #1 | Large |
|| 6 | Build topic clusters — write 4–8 supporting articles per pillar (e.g., "Best bedding for worm bins", "Fruit fly control") | Copilot #2 | Large

### Phase 3 — Conversion & Trust
|| # | Task | Source | Effort |
||---|------|--------|--------|
|| 9 | Create an "About" page with E-E-A-T content (background, YouTube channel, projects) | Copilot #16 | Medium |
|| 10 | Add email capture / lead magnet ("Download the beginner composting guide") | Copilot #18 | Medium |
|| 11 | Expand gear.html into comparison guides with tables (capacity, material, ventilation, price, pros/cons) | Copilot #10 | Large

### Phase 4 — UX & Technical
|| # | Task | Source | Effort |
||---|------|--------|--------|
|| 12 | Create a "Start Here" hub page with decision tree (space → time → method recommendation) | Copilot #12 | Medium |
|| 13 | Embed relevant YouTube videos on pillar pages + add transcripts/key takeaways | Copilot #17 | Medium |
|| 14 | Optimize site speed — compress images, lazy-load media, audit Core Web Vitals | Copilot #13 | Small-Medium

### Phase 5 — Ongoing
|| # | Task | Source | Effort |
||---|------|--------|--------|
|| 16 | Launch blog with consistent posting cadence (2–4 posts/month) | Copilot #19 | Ongoing |

## ✅ Completed Milestones (continued)
||||- [x] Google Analytics 4 integration: Added `G-KRHYVJXZLE` tracking snippet to all HTML pages.
||||- [x] HTML Sitemap: Created `sitemap.html` with organized page links for users and SEO.
||||- [x] XML Sitemap update: Added `blog.html` and `sitemap.html`, refreshed lastmod dates to 2026-07-10.
||||- [x] BioChar checklist typo fixes: corrected `var/text-dark` → `var(--text-dark)`, `alignintems` → `align-items`, `input[intype=...]` → `input[type=...]`, `achheck-content` → `check-content`, and broken `<intype=` tag on Phase 2 checkbox.
||||- [x] Added missing Tumbler Composting checklist link to index.html "Get Started" section (between Hot and Tea).
||||- [x] Tasks #1–#4: Unique titles, meta descriptions, heading hierarchy fixes, HowTo JSON-LD schemas on all 9 checklists, FAQPage schemas on gear/blog.
||||- [x] Task #7: Glossary page created with 30 alphabetized composting terms, linked from index.html.
||||- [x] Task #8: Troubleshooting sections added to all 9 method pages (smells, pests, moisture, slow breakdown).
||||- [x] Task #15: Mobile QA — checkboxes expanded to 24×24px on all checklists + biochar CSS typo fix.
||||- [x] Task #17: GSC verification meta tags added to all pages; low-CTR iteration framework established.

## 🔄 Development Workflow
- **Project Manager (this chat):** Plans scope, reviews results, makes design/content decisions.
- **OpenCode (coding agent):** Executes file changes, creates pages, implements features via `opencode run`.
- See `world-composting-dev` skill for the delegation workflow.

---
**How to Resume this Session:**
*Copy and paste the following into a new chat:*
"I'm working on the World Composting project. Please read `/mnt/h/Hermes/landing-page-fixed/PROJECT_MANIFEST.md` to get up to speed and let's continue from the 'Pending Changes' section."
