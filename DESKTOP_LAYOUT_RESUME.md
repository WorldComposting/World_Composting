# Desktop Layout Migration — Resume Guide

**Last updated:** 2026-08-27  
**Branch:** `desktop-layout` (protects live `main`)  
**Template:** `sample.html` (source of truth for desktop layout)

---

## What's Done (15 content pages migrated & committed on desktop-layout branch)

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
| `zero-waste-kitchen.html` | `4c49470` | 18-item checklist in 2 phases, progress tracker (localStorage), video section (2 real videos from `zero-waste-kitchen` key); sidebar active on "Zero Waste Kitchen" nav item; CSS byte-identical to tea.html style block |
| `gear.html` | `8f58774` | JS product listing (no checklist): 29 products in 8 categories, priority sort fixed (Worm Bin Items → Worm Bag → Fly Control → Bokashi Items → rest alphabetical), Tailwind CDN removed, site CSS classes; sidebar active on "View All Gear" nav item; verified clean console + all links real |

## 🎯 Current Focus (8/27)

**Next page: pick from "Remaining Pages"** — all pillar pages + gear are now migrated.
- Suggested order: `science-of-compost.html` first (deep-dive article, closest to worm/hot-composting template), then the other deep-dives, then utility pages.

**Uncommitted changes to keep OUT of the next commit:**
- `M bokashi.html` (duplicate empty `<script type="ld+json">` tag ~line 470)
- `M src/data/blog.json`, `?? BLOG_POSTS_DRAFT.md`, `?? sample.html`

## ⚠️ Deferred / Known Issues

- **hot.html is NOT linked in the left sidebar** — no nav item points to it. Needs a sidebar link added (decide placement: likely under "Hot Composting" guide or as its own checklist entry). Fix when revisiting hot.html or the sidebar nav.

---

## Remaining Pages to Migrate (13 content pages)

### Deep-Dive Pages (medium priority)
- `science-of-compost.html` — Science article (221 lines; was missing from this guide)
- `hot-best-materials.html`
- `hot-cn-ratio.html`
- `hot-not-heating.html`
- `hot-speed-tips.html`
- `worm-bedding.html`
- `worm-forbidden-foods.html`
- `worm-fruit-flies.html`
- `worm-harvesting.html`

### Utility Pages (lower priority)
- `blog.html` — Blog listing with JSON data loader
- `glossary.html` — 30 alphabetized terms
- `troubleshoot.html` — Diagnostic guide
- `quick_links.html` — Official links page (228 lines, small)

**Not migration targets:** `sitemap.html`, `google8a4b2c3d1e5f6789.html` (verification file), `sample.html` (template stub)

---

## Migration Process (Step-by-Step)

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

### Step 7: Commit
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

---

## Em-Dash Constraint
- **Preserve em-dashes in visible text** (article body, checklist descriptions) — they are intentional on this site
- **Replace em-dashes with colons in CSS/HTML comments only**

---

## How to Resume
1. Switch branch: `cd /mnt/h/Hermes/landing-page-fixed && git checkout desktop-layout`
2. Next up: see "Current Focus" section; all pillar pages are done, so pick from "Remaining Pages" (suggested: `science-of-compost.html`)
3. Follow migration process (Steps 1-7)
4. Reference this file for common bugs and fixes

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
