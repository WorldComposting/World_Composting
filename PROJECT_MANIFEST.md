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
- `troubleshoot.html`: ⚠️ Troubleshooting diagnostic guide.
- `src/styles/theme.css`: Central source of truth for visual design and accessibility settings.
- `src/assets/`: Static assets including logo and thumbnails.
- `src/components/`: Reusable UI elements.

## ✅ Completed Milestones
- [x] Initial project structure and folder hierarchy established.
- [x] Python automation logic for video fetching and thumbnail syncing.
- [x] Basic JSON-driven data pipeline implemented.
- [x] Core CSS theme (High contrast/ADA focused) initialized.
- [x] Unified branding across landing page and gear page via `theme.css`.
- [x] Refactored `gear.html` to root for GitHub Pages visibility.
- [x] Cleaned up redundant backups and duplicate files in project root.
- [x] CSS responsive/mobile audit — fixed contrast, added breakpoints, focus styles, overflow guards.
- [x] Synced `products.json` from Google Sheets CSV — fixed NaN→null, duplicate links, category ordering.
- [x] Worm Composting beginner checklist with localStorage persistence and progress tracker.
- [x] Bokashi Composting checklist (all food waste, EM-1 fermentation).
- [x] Hot Composting checklist (thermophilic piles, 130-160°F targets).
- [x] Tumbler Composting checklist (dual-chamber, small-space).
- [x] Compost Tea checklist (aerated brewing, molasses feeding).
- [x] Lasagna/Sheet Mulching checklist (no-dig beds, layer-by-layer).
- [x] Troubleshooting diagnostic guide (smells, pests, moisture, breakdown).
- [x] Index.html restructured — "Get Started" checklists above video feed for better newcomer onboarding.
- [x] Video cards redesigned — compact thumbnails left of titles (140×79px), mobile-responsive.

## 📋 Pending Changes
- [ ] Update all affiliate links to display "(Affiliate Link)" label (Amazon disclosure compliance).
- [ ] Create a new blog section for posting blog updates.
- [ ] Set up Google Analytics on the site.

## 🔄 Development Workflow
- **Project Manager (this chat):** Plans scope, reviews results, makes design/content decisions.
- **OpenCode (coding agent):** Executes file changes, creates pages, implements features via `opencode run`.
- See `world-composting-dev` skill for the delegation workflow.

---
**How to Resume this Session:**
*Copy and paste the following into a new chat:*
"I'm working on the World Composting project. Please read `/mnt/h/Hermes/landing-page-fixed/PROJECT_MANIFEST.md` to get up to speed and let's continue from the 'Pending Changes' section."
