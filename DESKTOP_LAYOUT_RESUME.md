# Desktop Layout Migration — Resume Guide

**Last updated:** 2026-08-26  
**Branch:** `desktop-layout` (protects live `main`)  
**Template:** `sample.html` (source of truth for desktop layout)

---

## What's Done (8 pages migrated & committed on desktop-layout branch)

| Page | Commit | Notes |
|------|--------|-------|
| `index.html` | `d47794e` | Homepage — grid wrapper, sticky nav, responsive breakpoints |
| `start-here.html` | `46688b1` | Wizard grid + sidebar nav |
| `about.html` | `6f580c4` | Content sections + video loader |
| `worm-composting.html` | `e1f1c98` | 11-section article grid, video loader preserved |
| `hot-composting.html` | `5ba3ae3` | 11-section article grid, video loader preserved |
| `beginner.html` | `ce74438` + fixes | Checklist phases, progress tracker, localStorage |
| `bokashi.html` | `1156a49` + fixes | 5 checklist phases, gear loader, video section |
| `biochar.html` | `f422568` (latest) | 4 checklist phases, troubleshooting, progress tracker |

---

## Remaining Pages to Migrate (18 pages)

### Pillar/Deep-Dive Pages (high priority)
- `hot.html` — Hot Composting overview
- `lasagna.html` — Lasagna/Sheet Mulching
- `sustainability.html` — Sustainability Journey Checklist
- `tea.html` — Compost Tea Checklist
- `tumbler.html` — Tumbler Composting Checklist

### Deep-Dive Pages (medium priority)
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
- `gear.html` — Gear comparison with category filtering
- `glossary.html` — 30 alphabetized terms
- `troubleshoot.html` — Diagnostic guide
- `zero-waste-kitchen.html` — Kitchen guide

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

---

## Em-Dash Constraint
- **Preserve em-dashes in visible text** (article body, checklist descriptions)
- **Replace em-dashes with colons in CSS/HTML comments** only
- Zero remaining em-dashes across committed files

---

## How to Resume
1. Switch branch: `cd /mnt/h/Hermes/landing-page-fixed && git checkout desktop-layout`
2. Pick next page from "Remaining Pages" list above
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
