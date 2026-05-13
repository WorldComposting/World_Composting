# PROJECT MANIFEST: World Composting Landing Page

## 📌 Project Overview
**Goal:** A high-legibility, ADA-compliant "Linktree-style" landing page for the [World Composting](http://worldcompost.com) YouTube channel. The page must showcase latest videos, Amazon product links, and core channel information.
**Core Values:** High contrast (for accessibility), frequent automated updates, and minimal maintenance.

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
- `index.html`: Main landing page (Linktree-style).
- `gear.html`: Detailed gear list (now in root for visibility).
- `src/styles/theme.css`: The central source of truth for the visual design and accessibility settings.
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

---
**How to Resume this Session:**
*Copy and paste the following into a new chat:*
"I'm working on the World Composting project. Please read `/mnt/h/Hermes/landing-page-fixed/PROJECT_MANIFEST.md` to get up to speed and let's continue from the 'Pending Changes' section."
