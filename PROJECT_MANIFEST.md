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
### Automation Scripts ⚠️ DO NOT RUN
- `scripts/fetch_videos.py`: Fetches latest videos from YouTube and updates `src/data/videos.json`.
- `scripts/sync_thumbnails.py`: Ensures thumbnails are locally available in `src/assets/thumbnails`.
- `scripts/sync_products.py`: Syncs `products.json` from Google Sheets CSV export (source of truth).

> **⚠️ NEVER run these scripts.** They have repeatedly backfired, making changes that break the site. Treat them as deprecated — do not execute them under any circumstances. Data files (`videos.json`, `products.json`) should be updated manually or via external processes only when explicitly directed by the user.

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

## 📋 Recently Completed (2026-08-07)
### Index.html Overhaul — Hub Site Redesign
|| # | Task | Details | Status |
||---|------|--------|--------|
|| 1 | Preserve original index.html | Copied to `quick_links.html` for Instagram traffic | ✅ DONE |
|| 2 | Rewrite index.html as SEO hub page | Hero section with H1 + keyword-rich intro, featured pillar guide cards (worm + hot composting), checklist grid (11 items), video playlists, recommended gear | ✅ DONE |
|| 3 | Em-dash cleanup | Removed all em dashes from `index.html` — replaced with commas, colons, or hyphens per user constraint | ✅ DONE |

### SEO Infrastructure
|| # | Task | Details | Status |
||---|------|--------|--------|
|| 4 | Create robots.txt | New file: allows all crawlers, points to sitemap.xml, no crawl delay for Googlebot | ✅ DONE |
|| 5 | Update sitemap.xml | Added worm-composting.html, hot-composting.html, quick_links.html; updated lastmod dates to 2026-08-07; set priority hierarchy (1.0 for homepage + pillars, 0.9 for checklists) | ✅ DONE |
|| 6 | Submit sitemap to Google Search Console | Sitemap submitted and accepted by GSC | ✅ DONE |

### Git Deployment
|| # | Task | Details | Status |
||---|------|--------|--------|
|| 7 | Push all changes to GitHub | Commit: "Redesign index.html as SEO hub, add pillar pages (worm-composting, hot-composting), quick_links backup, robots.txt, updated sitemap.xml" — pushed to main branch | ✅ DONE |

### About Page & Trust Signals
|| # | Task | Details | Status |
||---|------|--------|--------|
|| 9 | Create an "About" page with E-E-A-T content (background, YouTube channel, projects) | Created `about.html` with story section, content pillars, presentations mention, trust/credibility section, community CTA; added About card to index.html checklist grid; updated sitemap.xml; pushed to GitHub | ✅ DONE |
|| 21 | Fix product link colors on index.html | Featured gear links (Urban Worm Bag, Vermibag, Meme's Worms) were rendering black — added forest-green color override in JS template | ✅ DONE |

### Phase 3 — Conversion & Trust
|| # | Task | Source | Effort |
|||---|------|--------|--------|
||| 10 | Add email capture / lead magnet ("Download the beginner composting guide") | Copilot #18 | Medium |
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
|||||- [x] Task #17: GSC verification meta tags added to all pages; low-CTR iteration framework established.

## 📄 Additional Pages & Content (Post-Manifest Update)
|||||- [x] Biochar overview page (`biochar.html`).
|||||- [x] Blog section (`blog.html`) with `src/data/blog.json` data store.
|||||- [x] Glossary/definitions page (`glossary.html`) with 30 alphabetized composting terms.
|||||- [x] Start-here onboarding hub page (`start-here.html`) with decision tree.
|||||- [x] Quick links backup of original index.html (`quick_links.html`).
|||||- [x] HTML Sitemap display page (`sitemap.html`) with organized page links.
|||||- [x] Zero-waste kitchen guide (`zero-waste-kitchen.html`).

## 🌡 Hot Composting Deep-Dive Pages
|||||- [x] Best materials for hot composting (`hot-best-materials.html`).
|||||- [x] Carbon-to-Nitrogen ratio guide (`hot-cn-ratio.html`).
|||||- [x] Hot composting overview pillar page (`hot-composting.html`).
|||||- [x] Troubleshooting: pile not heating (`hot-not-heating.html`).
|||||- [x] Speed-up tips for hot composting (`hot-speed-tips.html`).

## 🪱 Worm Composting Deep-Dive Pages
|||||- [x] Worm composting overview pillar page (`worm-composting.html`).
|||||- [x] Bedding guide (`worm-bedding.html`).
|||||- [x] Forbidden foods list (`worm-forbidden-foods.html`).
|||||- [x] Fruit fly prevention (`worm-fruit-flies.html`).
|||||- [x] Harvesting methods (`worm-harvesting.html`).

## 🎨 New Stylesheets & Assets
|||||- [x] Article-specific styling (`src/styles/article.css`).
|||||- [x] Video section styling (`src/styles/video-section.css`).
||||||- [x] Blog data store (`src/data/blog.json`).

## 📋 Pending Changes
|||||||---|------|--------|--------|
||||||| 14 | Optimize site speed — compress images, lazy-load media, audit Core Web Vitals | Copilot #13 | Small-Medium | ✅ DONE (2026-08-11)

### Site Speed Optimization (#14) — Completed 2026-08-11
|||||||---|------|--------|--------|
||||||| a | Compress logo.png | PNG → optimized JPEG via ffmpeg q:v=75: 140KB → 11KB (92% reduction) | ✅ DONE
||||||| b | Add loading="lazy" to all static <img> tags | Added lazy loading to 26 of 27 images across all HTML pages; hero logo on index.html kept eager (above-the-fold critical asset) | ✅ DONE
||||||| c | Add width/height attributes to all <img> tags | Prevents Cumulative Layout Shift (CLS); applied to every static image with correct dimensions per context | ✅ DONE
||||||| d | Compress thumbnail images | All 15 thumbnails re-encoded via ffmpeg q:v=30: 3.1MB → 552KB total (82% reduction, ~30-40KB each at 140×79px display size) | ✅ DONE

### Updated Pages (26 files)
|||||||---|------|--------|--------|
||||||| 1–8 | Home-link logos (lazy only): hot-best-materials, hot-cn-ratio, hot-not-heating, hot-speed-tips, worm-bedding, worm-forbidden-foods, worm-fruit-flies, worm-harvesting | ✅ DONE
||||||| 9–24 | Logo images (dimensions + lazy): about, beginner, biochar, blog, bokashi, glossary, hot-composting, hot, lasagna, start-here (80×80), sustainability, tea, troubleshoot, tumbler, worm-composting, zero-waste-kitchen | ✅ DONE
||||||| 25 | index.html: hero logo dimensions only, featured video thumbnail lazy+140×79, 5 playlist thumbnails lazy+140×79 | ✅ DONE

### Asset Changes
|||||||---|------|--------|--------|
||||||| src/assets/logo.png | Replaced with JPEG variant (11KB) | ✅ DONE
||||||| src/assets/thumbnails/video_000–014.jpg | All re-encoded at quality 30 | ✅ DONE

## ✅ Completed Milestones (continued)
||||||- [x] 2026-08-12 Bug fixes: zero-waste-kitchen.html (4 fixes), sitemap.xml (changefreq tags), blog.json (duplicate removal), sustainability.html (score display layout).

## 📋 Pending Changes
||||||||---|------|--------|--------|
|||||||| 10 | Add email capture / lead magnet ("Download the beginner composting guide") | Copilot #18 | Medium |
|||||||| 11 | Expand gear.html into comparison guides with tables (capacity, material, ventilation, price, pros/cons) | Copilot #10 | Large |
|||||||| 13 | Embed relevant YouTube videos on pillar pages + add transcripts/key takeaways | Copilot #17 | Medium |
|||||||| 16 | Launch blog with consistent posting cadence (2–4 posts/month) | Copilot #19 | Ongoing |

## 🎬 Task #13 — YouTube Video Embedding Inventory

### Phase 1: Page-to-Video Mapping (2026-08-17)

**Source:** `/mnt/h/Hermes/research/youtube/youtube-videos-World-Composting.csv` (740 videos, latest: June 20, 2026)

#### Priority 1.0 — Pillar Pages (embed first)

##### worm-composting.html
| # | Video Title | URL | Match Reason |
|---|------------|-----|-------------|
| 1 | How to Start an Urban Worm Bag: The Ultimate Beginner's Guide! | https://www.youtube.com/watch?v=Eji3HGz97EY | Core setup walkthrough — ideal for "getting started" section |
| 2 | Worm Bin Prep: Biochar Pre-Heating Success! | https://www.youtube.com/watch?v=LMO-FwynYeY | Bedding prep with biochar (key topic on page) |
| 3 | How to Make Hot Pre-Compost for Faster Worm Castings | https://www.youtube.com/watch?v=4RAWlDsxdzE | Pre-composting technique referenced in advanced feeding section |
| 4 | Get Rid of Fruit Flies in Worm Bins 🪰 | https://www.youtube.com/watch?v=shlsmMy_gjc | Direct match to fruit fly prevention content on page |
| 5 | How to Harvest VermiBag Max: Perfect Castings Every Time | https://www.youtube.com/watch?v=iufCvxCwy1w | Harvesting demonstration — matches worm-harvesting deep-dive cross-link |

##### hot-composting.html
| # | Video Title | URL | Match Reason |
|---|------------|-----|-------------|
| 1 | How to Make Hot Pre-Compost for Faster Worm Castings | https://www.youtube.com/watch?v=4RAWlDsxdzE | Direct match — pre-composting heats up pile (thermophilic science section) |
| 2 | It's Getting HOT! 🔥 3-Day Pre-Compost Update | https://www.youtube.com/watch?v=CufHXbuVAo0 | Shows temperature rise in action — perfect for thermophilic phase explanation |
| 3 | How to Get Faster Worm Castings: Pre-Compost System for Advanced Bins | https://www.youtube.com/watch?v=a1mq4ZhQqJY | Pre-composting methodology (C:N ratio mastery section) |
| 4 | DIY Biochar Kiln for your Campfire! | https://www.youtube.com/watch?v=IBKm4LehBvA | Biochar as pile amendment — relevant to greens/browns and pile design sections |

#### Priority 0.9 — Checklist Pages (already have videos noted per user)

##### beginner.html
- Videos already identified by user for embedding on this page.

##### bokashi.html
- Videos already identified by user for embedding on this page.

#### Priority 0.7 — Deep-Dive Pages (embed second)

##### worm-bedding.html
| # | Video Title | URL | Match Reason |
|---|------------|-----|-------------|
| 1 | Hemp Bedding in a Worm Bin - Initial Setup! | https://www.youtube.com/watch?v=ZO1dyKaNqAQ | Direct bedding comparison (hemp) — matches hemp section on page |
| 2 | Hemp Bedding in a Worm Bin - Breaking Down Already?? | https://www.youtube.com/watch?v=3-L2fvXb2bc | Shows decomposition rate of hemp bedding |
| 3 | Hemp Bedding in a Worm Bin - Too Muddy! | https://www.youtube.com/watch?v=yDz5KkkL9u0 | Troubleshooting wet bedding — matches moisture section on page |
| 4 | Hemp Bedding in a Worm Bin - Baby Worms! | https://www.youtube.com/watch?v=EJwMWhq-Jqw | Shows successful hemp bedding with breeding worms |
| 5 | Hemp Bedding in a Worm Bin - First Feeding! | https://www.youtube.com/watch?v=dC0WPfbpD6k | Feeding on top of hemp bedding — practical demonstration |
| 6 | Hemp Bedding in a Worm Bin - 2 Month Wait | https://www.youtube.com/watch?v=eu34pDvTx2Q | Long-term bedding performance review |
| 7 | Hemp Bedding in a Worm Bin - No Migration?? | https://www.youtube.com/watch?v=hixoAGTZy5I | Worm migration behavior in hemp (key comparison point) |
| 8 | Hemp Bedding in a Worm Bin - Worms Everywhere! | https://www.youtube.com/watch?v=P3fZXQDzCgg | Final state — worms thriving in hemp bedding |

##### worm-forbidden-foods.html
| # | Video Title | URL | Match Reason |
|---|------------|-----|-------------|
| 1 | Can Worms consume Citrus?? Lets test with Lemons!! | https://www.youtube.com/watch?v=3sF6tGkwba0 | Direct citrus test — core forbidden food topic |
| 2 | Urban Worm Bag V2 with ENCs - More Lemons! | https://www.youtube.com/watch?v=OhF3QEog4Rw | Follow-up on lemon consumption results |
| 3 | Urban Worm Bag V2 with ENCs - Lemons are Gone!! | https://www.youtube.com/watch?v=C4CcHhKTEYw | Final result — lemons fully consumed (nuanced answer) |
| 4 | Worms vs Cantaloupe Time Lapse 4K Multi Speed | https://www.youtube.com/watch?v=c26eaSiPGVE | Shows worms consuming high-sugar fruit (forbidden food category) |
| 5 | Worms vs Lemons Time Lapse 4K Fast Speed | https://www.youtube.com/watch?v=OhF3QEog4Rw | Direct lemon consumption time-lapse |

##### worm-fruit-flies.html
| # | Video Title | URL | Match Reason |
|---|------------|-----|-------------|
| 1 | Get Rid of Fruit Flies in Worm Bins 🪰 | https://www.youtube.com/watch?v=shlsmMy_gjc | Primary fruit fly solution video — core match |
| 2 | Vermibag Max - Fruit Fly Trap Needed | https://www.youtube.com/watch?v=r9QiN9Gtqmg | Shows fruit fly problem in action |
| 3 | Vermibag Max - Pine Shavings Didn't Stop Fruit Flies | https://www.youtube.com/watch?v=Puk6tx4sT4o | Failed solution — useful for "what doesn't work" section |
| 4 | Vermibag Max - Fruit Flies Remain More Pine Shavings | https://www.youtube.com/watch?v=VloKyxiK-uw | Continued fruit fly struggle |
| 5 | Vermibag Max - Fruit Flies are Back 😡 | https://www.youtube.com/watch?v=quUzy7e02PQ | Recurring problem — reinforces prevention messaging |
| 6 | Simple DIY Fruit Fly Trap! Eliminate these flying pests! | https://www.youtube.com/watch?v=vYTQAENFjR0 | DIY trap tutorial — practical solution for readers |
| 7 | Killing Fruit Flies in a Worm Bin!!! | https://www.youtube.com/watch?v=wQcPnRojoT0 | Direct fruit fly elimination method |
| 8 | Vermibag Max - Fruit Fly Solution | https://www.youtube.com/watch?v=GZiKlTsZuDA | Successful solution demonstration |

##### worm-harvesting.html
| # | Video Title | URL | Match Reason |
|---|------------|-----|-------------|
| 1 | How to Harvest VermiBag Max: Perfect Castings Every Time | https://www.youtube.com/watch?v=iufCvxCwy1w | Primary harvesting tutorial — core match |
| 2 | Vermibag Max - Harvest Time | https://www.youtube.com/watch?v=iOoHyMZq9Y8 | Full harvest walkthrough |
| 3 | Urban Worm Bag V2 with ENCs - Harvest and Bedding Added | https://www.youtube.com/watch?v=3g5hmPG-uYM | Harvest + immediate restart (complete cycle) |
| 4 | Vermibag Max - 7 Months Later!!! | https://www.youtube.com/watch?v=5ncn5KtzR7w | Long-term harvest results — shows what mature castings look like |
| 5 | European Nightcrawlers (ENC) - Getting ready for Harvest | https://www.youtube.com/watch?v=YjzvdUz_w0Q | Pre-harvest preparation tips |

##### hot-best-materials.html
| # | Video Title | URL | Match Reason |
|---|------------|-----|-------------|
| 1 | How to Make Hot Pre-Compost for Faster Worm Castings | https://www.youtube.com/watch?v=4RAWlDsxdzE | Shows material selection and layering in pre-compost system |
| 2 | Vermibag Max - Large Feeding and Water Added | https://www.youtube.com/watch?v=sToxsC2oHE8 | Material addition demonstration (greens/browns) |
| 3 | Urban Worm Bag Version 1 - Composting Clothes and Large Feeding | https://www.youtube.com/watch?v=FY1UC0A6txc | Unusual materials test — matches "what can/can't compost" section |

##### hot-cn-ratio.html
| # | Video Title | URL | Match Reason |
|---|------------|-----|-------------|
| 1 | How to Make Hot Pre-Compost for Faster Worm Castings | https://www.youtube.com/watch?v=4RAWlDsxdzE | Shows C:N layering in practice (greens/browns ratio) |
| 2 | It's Getting HOT! 🔥 3-Day Pre-Compost Update | https://www.youtube.com/watch?v=CufHXbuVAo0 | Temperature response to correct C:N balance |
| 3 | Vermibag Max - Large Feeding and Water Added | https://www.youtube.com/watch?v=sToxsC2oHE8 | Material mixing demonstration (practical C:N application) |

##### hot-not-heating.html
| # | Video Title | URL | Match Reason |
|---|------------|-----|-------------|
| 1 | It's Getting HOT! 🔥 3-Day Pre-Compost Update | https://www.youtube.com/watch?v=CufHXbuVAo0 | Shows temperature rise — troubleshooting cold pile in action |
| 2 | How to Make Hot Pre-Compost for Faster Worm Castings | https://www.youtube.com/watch?v=4RAWlDsxdzE | Method to get a cold pile heating up (pre-composting fix) |
| 3 | Urban Worm Bag Version 1 - Added Rice to Turn up the Heat | https://www.youtube.com/watch?v=2GPxFday78w | Adding high-nitrogen material to raise temperature — direct troubleshooting match |

##### hot-speed-tips.html
| # | Video Title | URL | Match Reason |
|---|------------|-----|-------------|
| 1 | How to Make Hot Pre-Compost for Faster Worm Castings | https://www.youtube.com/watch?v=4RAWlDsxdzE | Speed-up method (pre-composting accelerates decomposition) |
| 2 | It's Getting HOT! 🔥 3-Day Pre-Compost Update | https://www.youtube.com/watch?v=CufHXbuVAo0 | Shows rapid temperature rise — speed demonstration |
| 3 | How to Get Faster Worm Castings: Pre-Compost System for Advanced Bins | https://www.youtube.com/watch?v=a1mq4ZhQqJY | Advanced acceleration techniques |

##### zero-waste-kitchen.html
| # | Video Title | URL | Match Reason |
|---|------------|-----|-------------|
| 1 | Karfo Ecostar S1 Waste Composter One Week Update | https://www.youtube.com/watch?v=WiL89CDd6No | Electric composter review — matches kitchen gadget section |
| 2 | Vitamix FoodCycler Eco 5 Review: 5 Month Test - Is It Worth It? | https://www.youtube.com/watch?v=4_aIShakNlg | Kitchen composter long-term review |
| 3 | Vitamix Eco 5 output in a Worm Bin Successful? | https://www.youtube.com/watch?v=DkTty1Url7I | Shows how to use electric composter output in worm bin (bridge content) |

##### sustainability.html
| # | Video Title | URL | Match Reason |
|---|------------|-----|-------------|
| 1 | Why I compost (False Peak of Jay Mountain) | https://www.youtube.com/watch?v=6HmrZRSwMVw | Personal motivation / "why" video — matches sustainability ethos section |

##### biochar.html
| # | Video Title | URL | Match Reason |
|---|------------|-----|-------------|
| 1 | DIY Biochar Kiln for your Campfire! | https://www.youtube.com/watch?v=IBKm4LehBvA | Core biochar production tutorial — primary match |
| 2 | Can THIS Become Biochar? 🔥♻️ | https://www.youtube.com/watch?v=EbG1jIeSUkA | Material testing for biochar suitability |
| 3 | Making Charcoal in a Camp Fire | https://www.youtube.com/watch?v=sbpy-gPW7bw | Basic charcoal/biochar production method |
| 4 | Small Batch Biochar for Composters | https://www.youtube.com/watch?v=iLrkTxMZWMA | Directly relevant — biochar specifically for compost applications |
| 5 | Ultimate Biochar Grinding & Preparation for Worm Bins and Soil — DIY Methods, Tools, & Tips (2025) | https://www.youtube.com/watch?v=AE8A2kCJYkY | Post-production processing — matches application section on page |

##### start-here.html
| # | Video Title | URL | Match Reason |
|---|------------|-----|-------------|
| 1 | How to Start an Urban Worm Bag: The Ultimate Beginner's Guide! | https://www.youtube.com/watch?v=Eji3HGz97EY | Best overall starter video — matches "start here" intent |
| 2 | Best Worm Bin for Beginners? Comparing 7, 10, 14, 27, & 40 Gallon Totes | https://www.youtube.com/watch?v=ZfgO2DUSzvY | Equipment comparison for beginners — matches decision tree content |

##### about.html
| # | Video Title | URL | Match Reason |
|---|------------|-----|-------------|
| 1 | Why I compost (False Peak of Jay Mountain) | https://www.youtube.com/watch?v=6HmrZRSwMVw | Personal story / motivation — matches "about" page narrative |

##### glossary.html
- No direct video matches. Glossary is reference-only content. Consider embedding a general overview video if one exists in future uploads.

#### Priority 0.7 — Other Pages

##### gear.html
| # | Video Title | URL | Match Reason |
|---|------------|-----|-------------|
| 1 | Best Worm Bin for Beginners? Comparing 7, 10, 14, 27, & 40 Gallon Totes | https://www.youtube.com/watch?v=ZfgO2DUSzvY | Direct gear comparison — matches gear page purpose |
| 2 | Urban Worm Bag vs Tote: Which Worm Bin is Best? (2026) | https://www.youtube.com/watch?v=gtjzfm--bKo | Product comparison video |

##### blog.html
- Blog listing page. Videos will be embedded on individual blog posts as needed.

---

### Phase 1 Summary

**Total pages to update:** 17 (4 priority 1.0/0.9 + 8 deep-dives + 5 other)
**Total unique videos to embed:** ~60 (some overlap across pages, e.g., pre-compost video appears on multiple hot composting pages)
**Videos already noted by user:** beginner.html and bokashi.html (to be added separately)

### Phase 2: Component Design (pending approval of Phase 1)
- Create reusable `<video-embed>` component with lazy loading, responsive iframe, and transcript toggle
- Define placement strategy: hero section for pillar pages, inline after relevant sections for deep-dives

### Phase 3: Implementation (pending approval of Phase 2)
- Build component, apply to priority 1.0 pages first, then cascade to remaining pages

---

## 🔄 Development Workflow
- **Project Manager (this chat):** Plans scope, reviews results, makes design/content decisions.
- **OpenCode (coding agent):** Executes file changes, creates pages, implements features via `opencode run`.
- See `world-composting-dev` skill for the delegation workflow.

---
**How to Resume this Session:**
*Copy and paste the following into a new chat:*
"I'm working on the World Composting project. Please read `/mnt/h/Hermes/landing-page-fixed/PROJECT_MANIFEST.md` to get up to speed and let's continue from the 'Pending Changes' section."
