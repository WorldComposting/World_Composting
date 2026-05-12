# PROJECT MANIFEST: World Composting Landing Page

## 📌 Project Overview
**Goal:** A high-legibility, ADA-compliant "Linktree-style" landing page for the [World Composting](http://worldcomposting.com) YouTube channel. The page must showcase latest videos, Amazon product links, and core channel information.
**Core Values:** High contrast (for accessibility), frequent automated updates, and minimal maintenance.

## 📂 Project Root
`/mnt/h/Hermes/landing-page-fixed`

## 🛠 Tech Stack
- **Frontend:** HTML5, CSS3 (Custom Theme), JavaScript.
- **Backend/Automation:** Python (for YouTube API scraping and thumbnail syncing).
- **Data Layer:** JSON (`videos.json`, `products.json`) acting as a lightweight database.
- **Deployment Target:** Static Web Hosting (e.g., GitHub Pages, Netlify, or local server).

## 🏗 Architecture & Key Files
### Automation Scripts
- `scripts/fetch_videos.py`: Fetches latest videos from YouTube and updates `src/data/videos.json`.
- `scripts/sync_thumbnails.py`: Ensures thumbnails are locally available in `src/assets/thumbnails`.

### Data Structure
- `src/data/videos.json`: List of processed video metadata.
- `src/data/products.json`: Curated list of Amazon affiliate products.

### Frontend Structure
- `src/components/`: Reusable UI elements (Video Cards, Product Cards, Social Links).
- `src/styles/theme.css`: The central source of truth for the visual design and accessibility settings.
- `public/assets/`: Static assets including logo and global images.

## ✅ Completed Milestones
- [x] Initial project structure and folder hierarchy established.
- [x] Python automation logic for video fetching and thumbnail syncing.
- [x] Basic JSON-driven data pipeline implemented.
- [x] Core CSS theme (High contrast/ADA focused) initialized.

## 🚀 Next Steps & Pending Changes
*Note to Agent: When resuming, start by discussing the items listed here.*

- [ ] **[PENDING]** Refine Linktree-style UI (User mentioned "a couple of changes" are needed).
- [ ] **[PENDING]** Implement/Verify Amazon Product sync logic.
- [ ] **[PENDING]** Finalize responsive layout testing for mobile devices.

---
**How to Resume this Session:**
*Copy and paste the following into a new chat:*
"I'm working on the World Composting project. Please read `/mnt/h/Hermes/landing-page-fixed/PROJECT_MANIFEST.md` to get up to speed and let's continue from the 'Pending Changes' section."
