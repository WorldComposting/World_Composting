# Desktop Layout Migration — Resume Guide

**Last updated:** 2026-08-31  
**Branch:** `desktop-layout` (protects live `main`)  
**Template:** `sample.html` (source of truth for desktop layout)

> **STOP - do not act from this file.** This document is a reference only. Reading it is NOT an instruction to continue work. Wait until the user explicitly names which page or task to handle before running any commands, migrating pages, verifying, or committing.

---

## What's Done (27 content pages migrated)

| Page | Commit | Notes |
|------|--------|-------|
| `index.html` | `d47794e` | Homepage — grid wrapper, sticky nav, responsive breakpoints |
| `start-here.html` | `46688b1` | Wizard grid + sidebar nav |
| `about.html` | `6f580c4` | Content sections + video loader |
| `worm-composting.html` | `e1f1c98` | 11-section article grid, video loader preserved |
| `hot-composting.html` | `5ba3ae3` | 11-section article grid, video loader preserved |
| `beginner.html` | `ce74438` + `f4e20c4` | Checklist phases, progress tracker, localStorage; pillar hero header (back-link-wide + H1 "Beginner's Checklist") + gear section added 8/27 |
| `bokashi.html` | `1156a49` + `f4e20c4` | 5 checklist phases, gear loader, video section; pillar hero header (back-link-wide + H1 "Bokashi Checklist") + gear section added 8/27 — user-approved reference for the shared header pattern |
| `biochar.html` | `de051b6` | 4 checklist phases, troubleshooting, progress tracker; header fixed to pillar-hero-wide pattern |
| `hot.html` | `5a1903b` (latest) | 30-item checklist in 5 phases, progress tracker, gear section; sidebar active class removed (mobile has none); verified clean console + styled hero |
| `tumbler.html` | `ece948b` | 30-item checklist in 5 phases, progress tracker, gear loader (18 items), video container (empty by design: `tumbler: []` in video-renderer.js); sidebar active on "Tumbler Composting" nav item; verified clean console + styled hero |
| `tea.html` | `7bf0963` | 30-item checklist in 5 phases, progress tracker, gear loader (4 items: Water Gear + Bokashi Items), video container (empty by design: `tea: []`); sidebar active on "Compost Tea" nav item; verified clean console + styled hero |
| `lasagna.html` | `a13e9a7` | 30-item checklist in 5 phases, progress tracker, gear loader (8 items: Water Gear + Worm Bin Equipment), video container (empty by design: no `lasagna` entry); sidebar active on "Lasagna Composting" nav item; verified clean console + styled hero |
| `sustainability.html` | `964d273` | 31-item checklist in 3 phases, progress tracker (localStorage), troubleshooting accordions, video section (real videos from `sustainability` key); sidebar active on "Sustainability Journey" nav item; verified clean console + working checkbox/progress logic |
| `zero-waste-kitchen.html` | `4c49470` + `6f2a910` | 7-item checklist in 2 phases, progress tracker (localStorage), gear loader (Paper category: 3 items), video section (2 real videos from `zero-waste-kitchen` key); sidebar active on "Zero Waste Kitchen" nav item; CSS byte-identical to tea.html style block; phase-wide card styling added in follow-up |
| `gear.html` | `8f58774` | JS product listing (no checklist): 29 products in 8 categories, priority sort fixed (Worm Bin Items → Worm Bag → Fly Control → Bokashi Items → rest alphabetical), Tailwind CDN removed, site CSS classes; sidebar active on "View All Gear" nav item; verified clean console + all links real |
| `glossary.html` | this session | 23 alphabetized terms in A–Z accordion (letter buttons toggle bodies). Custom `.glossary-*` CSS copied verbatim from mobile file into the grid page's style block. Sidebar active on "Glossary" nav item; verified: clean console, accordion works (A→B toggle tested), footer styled, back-link present |
| `science-of-compost.html` | 8/28 | Pure article page (no JS/video): worm-composting pattern — sidebar + TOC + lead intro block + 7 `article-section-wide` sections; no active sidebar marker (page not in nav, hot.html precedent); verified: verify_page.py all PASS/SKIP, tag balance OK, JSON-LD Article parses, 7/7 TOC anchors resolve |
| `hot-best-materials.html` | this session | Short article page (4 sections): worm-composting pattern — back-link-wide + pillar-hero-wide (H1 + subtitle) + TOC (4 anchors, all verified resolving) + 4 `article-section-wide` sections; C:N table restyled to `info-table-wide`; "Materials to Avoid" checklist converted to plain `<ul>` (no JS on page); CTA wrapped in `callout-wide tip`; video container kept inside main (`best-materials` key renders 1 real video: Hot Composting 101, takeaways present); no active sidebar marker (page not in nav); verified: clean console, sidebar byte-identical to index.html (whitespace-normalized), tag balance OK |
| `hot-cn-ratio.html` | this session | Article page (intro + 7 sections): worm-composting pattern — back-link-wide + pillar-hero-wide + TOC (7 anchors, all verified resolving) + intro block + 7 `article-section-wide` sections; 3 tables restyled to `info-table-wide`; "How to Calculate" dead-checkbox checklist converted to plain `<ol>`; CTA wrapped in `callout-wide tip` linking hot-composting.html; video container kept inside main (`cn-ratio` key renders 1 real video: It's Getting HOT! 3-Day Pre-Compost Update, takeaways present); no active sidebar marker (page not in nav); verified: clean console, tag balance OK, all TOC anchors resolve |
| `troubleshoot.html` | this session | Checklist page (tea.html pattern): 5 phases x 6 items = 30 checkboxes (localStorage prefix `trouble_`), progress tracker, hero-intro-wide intro block; gear loader (13 items: Worm Bin Items + Fly Control + Water Gear); no video section (no `troubleshoot` key in videos.json and mobile original had none — faithful to source); HowTo JSON-LD schema preserved (7 steps, parses clean); sidebar active on "Troubleshooting" nav item; verified: verify_page.py all PASS/SKIP, clean console (0 errors), checkbox click updates progress + localStorage round-trip works, accordion toggles work, gear renders 13 items |
| `hot-not-heating.html` | this session | Article page (intro + 7 sections): hot-best-materials pattern — back-link-wide + pillar-hero-wide (H1 + subtitle) + TOC (7 anchors, all verified resolving) + intro block + 5 problem sections with bold Solution lines; diagnostic table restyled to `info-table-wide` (5 rows); CTA wrapped in `callout-wide tip` linking troubleshoot.html; video container kept inside main (`not-heating` key renders 1 real video: Worms Escaping short, takeaways present — source mobile page HAD the video section, so preserved); no active sidebar marker (page not in nav); verified: verify_page.py all PASS/SKIP except pre-existing sidebar-whitespace FAIL shared with reference pages, clean console (0 errors), 7/7 TOC anchors resolve, table renders 5 rows |
| `hot-speed-tips.html` | this session | Article page (intro + 7 sections): hot-best-materials pattern — back-link-wide + pillar-hero-wide (H1 + subtitle) + TOC (7 anchors, all verified resolving) + intro block + 7 `article-section-wide` sections; dead-checkbox lists (turning schedule ol, particle size ul, insulation ul) converted to plain `<ol>`/`<ul>` per hot-cn-ratio precedent (no JS on page); 2 comparison tables restyled to `info-table-wide` (4 rows each); CTA wrapped in `callout-wide tip` linking hot-composting.html; video container kept inside main (`speed-tips` key renders 1 real video: Worm Bag vs Tote, takeaways present — source mobile page HAD the video section, so preserved); no active sidebar marker (page not in nav, only a data-listing entry in index.html); verified: verify_page.py all PASS/SKIP except pre-existing sidebar-whitespace FAIL shared with reference pages, clean console (0 errors), 7/7 TOC anchors resolve, both tables fit cards without overflow |
| `worm-bedding.html` | this session | Article page (intro + 5 sections): hot-best-materials pattern — back-link-wide + pillar-hero-wide (H1 + subtitle) + TOC (5 anchors, all verified resolving) + intro block + 5 `article-section-wide` sections; "Top Bedding Materials Compared" section keeps its 4 H3 subsections with Pros/Cons paragraphs intact; dead-checkbox prep list converted to plain `<ol>` per hot-cn-ratio precedent (no JS on page); comparison table restyled to `info-table-wide` (4 rows, 4 columns — verified fits card without overflow); CTA wrapped in `callout-wide tip` linking beginner.html; video container kept inside main (`bedding` key renders 2 real videos: Hemp Bedding pair, takeaways present — source mobile page HAD the video section, so preserved); no active sidebar marker (page not in nav, only a data-listing entry in index.html); verified: verify_page.py all PASS/SKIP except pre-existing sidebar-whitespace FAIL shared with reference pages, clean console (0 errors), 5/5 TOC anchors resolve |
| `worm-forbidden-foods.html` | this session | Article page (intro + 5 sections): hot-best-materials pattern — back-link-wide + pillar-hero-wide (H1 + subtitle) + TOC (5 anchors, all verified resolving) + intro block + 5 `article-section-wide` sections; "Foods to Never Add" section keeps its 6 H3 subsections intact; dead-checkbox lists (safe foods ul, overfeeding signs ol) converted to plain `<ul>`/`<ol>` per hot-cn-ratio precedent (no JS on page); comparison table restyled to `info-table-wide` (5 rows, 3 columns — verified fits card without overflow); CTA wrapped in `callout-wide tip` linking worm-composting.html; video container kept inside main (`forbidden-foods` key renders 2 real videos: citrus/lemon test pair, takeaways present — source mobile page HAD the video section, so preserved); no active sidebar marker (page not in nav, only a data-listing entry in index.html); verified: verify_page.py all PASS/SKIP except pre-existing sidebar-whitespace FAIL shared with reference pages, clean console (0 errors), 5/5 TOC anchors resolve |
| `worm-fruit-flies.html` | this session | Article page (intro + 6 sections): hot-best-materials pattern — back-link-wide + pillar-hero-wide (H1 + subtitle) + TOC (6 anchors, all verified resolving) + intro block + 6 `article-section-wide` sections; "Prevention" and "Eliminating Existing Populations" sections keep their H3 subsections intact (3 each); dead-checkbox prevention checklist converted to plain `<ol>` per hot-cn-ratio precedent (no JS on page — renders decimal markers, verified via computed style); comparison table restyled to `info-table-wide` (4 rows, 2 columns — measured: table width exactly equals card inner width, no overflow, no page h-scroll); CTA wrapped in `callout-wide tip` linking troubleshoot.html; video container kept inside main (`fruit-flies` key renders 1 real video: DIY Fruit Fly Trap, takeaways present — source mobile page HAD the video section, so preserved); no active sidebar marker (page not in nav, only a data-listing entry in index.html); verified: verify_page.py all PASS/SKIP except pre-existing sidebar-whitespace FAIL shared with reference pages, clean console (0 errors), 6/6 TOC anchors resolve |
| `worm-harvesting.html` | this session | Article page (intro + 7 sections): hot-best-materials pattern — back-link-wide + pillar-hero-wide (H1 + subtitle from meta description) + TOC (7 anchors, all verified resolving) + intro block (lead paragraph preserved as its own section after TOC, matching worm-bedding/worm-forbidden-foods structure) + 7 `article-section-wide` sections; dead-checkbox lists (migration steps x7, harvesting timeline x4) converted to plain `<ol>` per hot-cn-ratio precedent (no JS on page — both render decimal markers, verified via computed style); comparison table restyled to `info-table-wide` (4 rows, 3 columns — measured: table width exactly equals card inner width at 728px, no overflow, no page h-scroll); CTA wrapped in `callout-wide tip` linking worm-composting.html; video container kept inside main (`harvesting` key renders 2 real videos: VermiBag Max + Red Wigglers pair — source mobile page HAD the video section, so preserved); no active sidebar marker (page not in nav, only a data-listing entry in index.html); verified: verify_page.py all PASS/SKIP except pre-existing sidebar-whitespace FAIL shared with reference pages, clean console (0 errors), 7/7 TOC anchors resolve |
| `blog.html` | this session | Utility page (JS-driven blog listing): worm-harvesting pattern — back-link-wide + pillar-hero-wide (H1 "World Composting Blog" + subtitle) + `#blog-list-container` with section-title heading; JS loader preserved verbatim (fetch src/data/blog.json, video-card rendering, error handling); mobile `<style>` block kept for the JS-rendered cards; **active sidebar marker on Blog link** (page IS a nav item in index.html line 562 — unlike deep-dives); FAQPage JSON-LD preserved as-is from source (NOTE: schema content is generic composting-basics FAQs, not blog-specific — flagged to user, kept per preserve-schema rule); **fixed copy-paste title bug**: mobile `<title>` said "World Composting | Official Links" (leftover from quick_links) — corrected to "World Composting | Blog"; added google-site-verification meta per established pattern; gtag already in source; verified: verify_page.py all PASS/SKIP except sidebar FAIL which is ONLY the intentional active class + pre-existing whitespace (diffed against index.html), clean console (0 errors), 3/3 blog posts render from JSON, no page h-scroll |

## 🎯 Current Focus (8/31)

**Suggested next page (only if user asks): `quick_links.html`** — last remaining utility page (all deep-dives + blog done). Do not start without an explicit user prompt naming the page.

**Uncommitted changes to keep OUT of the next commit:**
- `M bokashi.html` (duplicate empty `<script type="ld+json">` tag ~line 470)
- `M src/data/blog.json`, `?? BLOG_POSTS_DRAFT.md`, `?? sample.html`

## ⚠️ Deferred / Known Issues

- **hot.html is NOT linked in the left sidebar** — no nav item points to it. Needs a sidebar link added (decide placement: likely under "Hot Composting" guide or as its own checklist entry). Fix when revisiting hot.html or the sidebar nav.

---

## Remaining Pages to Migrate (1 content page)

### Utility Pages (lower priority)
- `quick_links.html` — Official links page (228 lines, small)

**Done 8/31:** `hot-best-materials.html`, `hot-cn-ratio.html`, `troubleshoot.html`, `hot-not-heating.html`, `hot-speed-tips.html`, `worm-bedding.html`, `worm-forbidden-foods.html`, `worm-fruit-flies.html`, `worm-harvesting.html`, `blog.html` ✓ (moved to Completed table above)

**Not migration targets:** `sitemap.html`, `google8a4b2c3d1e5f6789.html` (verification file), `sample.html` (template stub)

---

## Migration Process (Step-by-Step)

Follow these steps only after the user has explicitly asked you to migrate a specific page.

### Step 1: Run migration script
```bash
python3 /tmp/migrate_biochar.py   # or create new one for each page
```
This extracts body content and wraps it in the desktop grid layout with sidebar nav.

### Step 2: Fix CSS class names (CRITICAL — always do this)
The migration preserves original classes which don't match the new CSS. Update these:

| Original | New Class | Why |
|----------|-----------|-----|
| `class="hero-intro"` | `class="hero-intro-wide"` | White box background, wider padding (2.5rem 3rem) |
| `id="progress-wrapper"` | `id="progress-wrapper-wide"` | Progress tracker white box styling |
| `class="phase"` | `class="phase phase-wide"` | Collapsible section white boxes with shadows |

**Check for these after migration:**
```bash
grep -n 'class="hero-intro"\|id="progress-wrapper"\|class="phase "' biochar.html
# Should show: hero-intro-wide, progress-wrapper-wide, phase phase-wide
```

### Step 3: Remove `<div id="app">` wrapper if present
This is the #1 cause of layout bugs. The `#app` wrapper applies from theme.css:
```css
#app { max-width: 720px; text-align: left; display: flex; justify-content: center; }
```
This constrains everything inside to a narrow column, breaking white box widths.

**Fix:** Remove the opening `<div id="app">` and its corresponding closing `</div>`.

### Step 4: Verify sidebar nav matches index.html exactly
The sidebar must have these properties:
- **Section labels:** `<li class="sidebar-section-label">Guides</li>` etc.
- **Relative paths:** `href="start-here.html"` NOT `href="/start-here.html"`
- **No emojis** in link text (index.html doesn't use them)
- **Only one page has `class="active"`** — the current page itself

### Step 5: Fix back-link class
```html
<!-- WRONG -->
<a href="/" class="back-link">← Back to Home</a>

<!-- RIGHT -->
<a href="/" class="back-link-wide">← Back to Home</a>
```

### Step 6: Verify structure integrity
Check closing tags are balanced and no orphaned elements:
```bash
grep -n '</main>\|</div><!-- .page-wrapper -->\|</html>' biochar.html
# Should show exactly one of each, in order: </main>, </div>, </html>
```

### Step 7: Commit (ONLY after explicit user approval)
Do not commit on your own initiative. Show the result, wait for the user to approve, then run:
```bash
cd /mnt/h/Hermes/landing-page-fixed
git add <filename>.html
git commit -m "Migrate <page>.html to desktop layout"
```

---

## Common Bugs & Fixes

### Bug 1: White boxes too narrow (600px or 720px)
**Cause:** `<div id="app">` wrapper still present  
**Fix:** Remove it (Step 3 above)

### Bug 2: Sidebar doesn't match index.html
**Cause:** Migration script used old sidebar template with emojis and root-relative paths  
**Fix:** Replace entire sidebar block to match index.html exactly (Step 4)

### Bug 3: Missing white box backgrounds on sections
**Cause:** `class="phase"` instead of `class="phase phase-wide"`  
**Fix:** Update classes (Step 2)

### Bug 4: Duplicate footer or broken structure at end of file
**Cause:** Migration script didn't properly handle closing tags  
**Fix:** Check lines near `</main>` and `</html>` — should be clean with no duplicates

### Bug 5: "Back to Home" link styling wrong
**Cause:** `class="back-link"` instead of `class="back-link-wide"`  
**Fix:** Update class name (Step 5)

### Bug 6: Unstyled mobile header block left in main column
**Cause:** Migration kept the mobile `<header>` markup (back link + 110px logo + H1 + subtitle) but dropped its CSS, so it renders as floating unstyled elements  
**Fix:** Replace with the pillar pattern used by worm-composting/hot-composting: `back-link-wide` anchor, then `<div class="pillar-hero-wide">` containing centered H1 + italic `.subtitle`. Add the `.pillar-hero-wide` CSS block (copy from worm-composting.html). Checklist pages without a hero (bokashi/beginner) start straight at the progress tracker.

### Bug 7: Video section inside `<footer>`
**Cause:** Mobile structure had `#video-container-*` inside the footer element  
**Fix:** Move it to be the last element of `<main>`, then close main, close `.page-wrapper`, and put a clean full-width `<footer class="footer-wide">` after (matches bokashi/beginner)

### Bug 8: Malformed google-site-verification meta tags
**Cause:** Migration duplicated/corrupted the verification metas (one with content = meta description, one truncated)  
**Fix:** Single tag: `<meta name="google-site-verification" content="google8a4b2c3d1e5f6789">`

### Bug 9: Analytics half-broken
**Cause:** gtag.js script loaded but the dataLayer/config block was dropped, so GA never fires  
**Fix:** Add the standard config script right after the gtag.js tag (copy from bokashi.html)

### Bug 10: JSON-LD schema lost in migration
**Cause:** Mobile page had HowTo/other structured data that the migration script skipped  
**Fix:** Restore from `git show main:<page>.html` and validate with `python3 -c "import json,re; json.loads(re.search(r'ld\+json\">(.*?)</script>', open('PAGE').read(), re.S).group(1))"`

### Bug 11: Sidebar nav section mismatch
**Cause:** Bokashi listed under Guides instead of Checklists (or vice versa)  
**Fix:** Sidebar must be byte-identical to index.html except the `class="active"` marker. Verify with a diff that strips active classes.

### Bug 12: Terminal heredocs / python one-liners time out on /mnt/h
**Cause:** WSL + Windows drive (H:) filesystem is slow; inline `python3 -c` and heredoc scripts can hang or exit -1  
**Fix:** Write helper scripts to `/tmp/*.py` (Linux fs) and run with `python3 /tmp/script.py`; use search_files/ripgrep instead of grep pipelines for searches

### Bug 13: JS listing page sort order silently wrong
**Cause:** gear.html's category comparator had a broken rule (`if (aIndex !== -1 && b.includes("Worm")) return -1;`) that ran before the index comparison, so Fly Control rendered first instead of Worm Bin Items  
**Fix:** Comparator must be: both in priority list → `aIndex - bIndex`; only one in list → that one first; else alphabetical. Always verify rendered order in browser against the user's stated priority (Worm Bin Items → Worm Bag → Fly Control → Bokashi Items → rest)

### Bug 14: Extracted JS block loses IIFE closing
**Cause:** When a migration script extracts an inline `<script>` body with a non-greedy regex, it can stop before the final `})();`, producing a syntax error that silently kills the whole script (no console message; functions just undefined)  
**Fix:** After extraction, assert the block ends with `})();` and append it if missing. Verify in browser: check a known function is defined (`typeof togglePhase`)

---

## Em-Dash Constraint
- **Preserve em-dashes in visible text** (article body, checklist descriptions) — they are intentional on this site
- **Replace em-dashes with colons in CSS/HTML comments only**

---

## Resume Context (reference only - do not act until prompted)
This section describes the state of things so a new session can get oriented. It is NOT an instruction to start work. Wait for the user to say which page or task to handle first.

- Working branch: `desktop-layout` in `/mnt/h/Hermes/landing-page-fixed` (switch only when the user asks)
- Status as of 8/31: **27 done / 1 remaining** (blog.html completed; ALL deep-dives + blog migrated). Remaining: `quick_links.html` only
- When the user does prompt work: follow migration process (Steps 1-7) and reference this file for common bugs and fixes

**Page-type notes:**
- **Checklist pages** (tea/lasagna/sustainability/zero-waste-kitchen pattern): phases + progress tracker + gear loader + video section; use `phase phase-wide` on every phase div
- **Article/deep-dive pages** (worm-composting/hot-composting pattern): multi-section article grid, no checklist
- **JS listing pages** (gear.html pattern): keep the page's own rendering logic, wrap in sidebar + wide grid, restyle with site CSS classes; verify sort order and link targets in browser after migration

---

## Key Files
- **Template:** `sample.html` — source of truth for desktop layout structure
- **CSS:** `src/styles/theme.css` — base styles; page-specific overrides in `<style>` blocks
- **Data:** `src/data/videos.json`, `src/data/products.json` — preserved during migration
- **Scripts:** `/tmp/migrate_*.py` — temporary Python scripts for layout injection (delete after use)

---

## Git Commands Reference
```bash
# Check status
cd /mnt/h/Hermes/landing-page-fixed && git status

# View recent commits on desktop-layout
git log --oneline -10

# Switch to main and pull latest changes
git checkout main && git pull origin main

# Switch back to desktop-layout branch
git checkout desktop-layout

# Merge main into desktop-layout (to get new pages/features)
git merge main

# Push to remote
git push origin desktop-layout
```
