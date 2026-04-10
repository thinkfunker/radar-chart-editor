# Agent-i Design System — Component Index

> **Last Updated:** 2026-03-21
> **Source:** `agent-i-components.js` · `agent-i-ds.css` · `ui/components/`
> **Purpose:** A single-file reference to achieve 90%+ DS reproduction — covering function return structures, built-in CSS behaviors, icon loading methods, and layout patterns all in one place.

---

## 3-Tier Classification Overview (Complexity-Based)

1. **[Atomic (Tokens)](#3-design-tokens)**: Basic variables (Colors, Spacing, Typography).
2. **[Component (Atoms)](#1-tier-2-component-tier-atoms)**: Simple UI units (Button, Badge, Avatar, Switch).
3. **[Block (Compositions)](#2-tier-3-block-tier-compositions)**: Complex patterns (Cards, Navigation, AI-UI, Grids).

---

## Table of Contents

1. [Tier 2: Component Tier (Atoms)](#1-tier-2-component-tier-atoms)
2. [Tier 3: Block Tier (Compositions)](#2-tier-3-block-tier-compositions)
3. [Tier 1: Atomic Tier (Design Tokens)](#3-design-tokens)
4. [Icons](#4-icons)
5. [Summary](#5-summary)

---

## 1. Tier 2: Component Tier (Atoms)
> **Definition**: Single-function UI elements with minimal internal complexity.

| Component | Function/Class | Description |
|---|---|---|
| Button | `DS.button` / `.btn` | Basic action target |
| Ghost Button | `DS.ghostButton` / `.ghost-btn` | Secondary action with icon |
| Toggle Button | `.toggle-btn` | On/Off state selection |
| Chip | `.chip` | Single filtering unit |
| Badge | `DS.badge` / `.badge` | Numeric or dot indicator |
| Tag | `DS.tag` / `.tag` | Status label/Pill |
| Score | `DS.score` / `.score` | Star rating display |
| Avatar | `.avatar` | User/AI profile image |
| Checkbox | `.checkbox-wrap` | Multiple choice selection |
| Radio | `.radio-wrap` | Single choice selection |
| Switch | `.sw` | Boolean toggle |
| Progress | `.progress-circle` | Loading/Status indicator |
| Divider | `DS.divider` / `.divider` | Visual separator |

---

## 2. Tier 3: Block Tier (Compositions)
> **Definition**: High-complexity UI patterns composed of multiple tokens and components. **Primary unit for AI assembly.**

### 2-A. Navigation & Shells
| Block | Function/Class | Parts |
|---|---|---|
| Phone Frame | `DS.phoneFrame` | Parent container |
| Sticky Header | `DS.stickyHeader` | Scroll-fixed top area |
| Top Nav | `DS.topnav` / `.topnav` | App bar with back/title/right |
| Bottom Nav | `DS.bottomNav` / `.ds-bottom-nav` | Main navigation bar |
| Search Bar | `DS.searchBar` / `.aitinput` | AI-powered search entry |
| Chip Scroll Row | `DS.chipScroll` | Horizontally scrollable tab row |

### 2-B. Cards & Data Lists
| Block | Function/Class | Features |
|---|---|---|
| Product Card | `DS.productCard` / `.pcard` | Image + Brand + Name + Price + Score |
| Product Grid | `DS.productGrid` | 2-column grid layout |
| Media Card | `DS.mediaCard` / `.mcard` | Banner + Title + Tags + CTA |
| Review Card | `.review-card` | Score + Comment |
| Info Card | `.info-card` | Key-Value pairs |
| Question Card | `.qcard` | Multi-step AI interaction card |
| Selection Card | `.selcard` | AI choice selection card |
| Selection Result | `.crc` | Resulting chips from AI choice |

### 2-C. AI & Messaging
| Block | Function/Class | Features |
|---|---|---|
| AI Text Input | `.ai-input` / `.aitinput` | Chat input with mic/buttons |
| AI Suggestions | `DS.aiSuggestionChips` | Clickable prompt chips |
| Chat Message (AI) | `.msg-ai` | Avatar + Name + Content Blocks |
| Chat Message (User) | `.msg-item--user-bubble` | Bubble + Right alignment |
| Agent Hero | `.agent-hero` | Onboarding/Splash for Agent |

### 2-D. Containers & Overlays
| Block | Function/Class | Usage |
|---|---|---|
| Modal | `.modal` | Dialog/Bottom sheet |
| Accordion | `.accordion` | Collapsible sections |
| Toast | `.toast` | Temporary feedback |
| Tooltip | `.tooltip` | Hover info |
| Carousel | `.carousel` | Swipable gallery |

---

## 1. DS Function Components (JS-generated)

> **Source File:** `agent-i-components.js`
> **Usage:** `<script src="agent-i-components.js">` → Call `DS.xxx()` to get an HTML string back
> **Load Order:** Load `agent-i-ds.css` before `agent-i-components.js`

| Component | Function | Key Classes | Category |
|---|---|---|---|
| Phone Frame | `DS.phoneFrame(children, opts)` | `.ds-phone` | Layout |
| Scroll Area | `DS.scrollArea(children, opts)` | — (inline styles) | Layout |
| Sticky Header | `DS.stickyHeader(children)` | — (inline styles) | Layout |
| Page Assembler | `DS.page(sections)` | — | Layout |
| Top Nav | `DS.topnav(opts)` | `.topnav .topnav--mobile` | Navigation |
| Bottom Nav | `DS.bottomNav(items)` | `.ds-bottom-nav .bnav-item` | Navigation |
| AI Search Bar | `DS.searchBar(opts)` | `.aitinput .aitinput__inner` | Input |
| Chip Scroll Row | `DS.chipScroll(labels, activeIndex, opts)` | `.chip .chip--solid-rounded` | Filter |
| AI Suggestion Chips | `DS.aiSuggestionChips(questions, opts)` | `.aisc-list-row .aisc-send-btn` | AI Card |
| Section Header | `DS.sectionHeader(opts)` | — (inline styles) | Content Structure |
| Divider | `DS.divider(opts)` | `.divider` | Content Structure |
| Badge | `DS.badge(opts)` | `.badge .badge--number/.badge--dot` | Atom |
| Tag | `DS.tag(opts)` | `.tag .tag--pill .tag--{variant}` | Atom |
| Score (Star Rating) | `DS.score(opts)` | `.score .score--sm/.score--md` | Atom |
| Button | `DS.button(opts)` | `.btn .btn--{size} .btn--{variant}` | Atom |
| Ghost Button | `DS.ghostButton(opts)` | `.ghost-btn .ghost-btn--{size}` | Atom |
| Product Card | `DS.productCard(opts)` | `.pcard .pcard__img-wrap .pcard__body` | Card |
| Product Grid | `DS.productGrid(cards)` | — (CSS Grid inline) | Card |
| Media Card | `DS.mediaCard(opts)` | `.mcard .mcard__img .mcard__body` | Card |

---

### 1-A. DS Function Return HTML Structure (based on actual source)

The actual top-level HTML structure returned by each function. Reference this for dynamic DOM manipulation.

#### `DS.phoneFrame(children, opts)`
```html
<div class="ds-phone" style="width:390px;min-height:100vh;background:#f5f6f8;
  display:flex;flex-direction:column;position:relative;box-shadow:0 0 60px rgba(0,0,0,0.18);">
  <!-- children -->
</div>
```
- `opts.bg` : Phone background color (default `#f5f6f8`)
- `opts.clipOverflow` : Clip overflow inside the phone frame (default `false`)
- Pass children as an **array** → joined internally via `join()`

---

#### `DS.scrollArea(children, opts)`
```html
<div style="flex:1;overflow-y:auto;padding-bottom:80px;">
  <!-- children -->
</div>
```
- `opts.paddingBottom` : Default `'80px'` (reserves space for the bottom nav height)
- `opts.background` : Optional background color for the scroll area
- `opts.className` : Optional class name on the scroll container
- Uses `flex:1`, so it must be used inside a `phoneFrame` flex-column context

---

#### `DS.stickyHeader(children)`
```html
<div style="position:sticky;top:0;z-index:20;background:#fff;box-shadow:0 1px 0 #e4e7ed;">
  <!-- children (topnav + searchBar + chipScroll, etc.) -->
</div>
```
- Fixed z-index of 20. Floats above content while scrolling.

---

#### `DS.topnav(opts)`
```html
<div class="topnav topnav--mobile">
  <div class="topnav__left topnav__left--fixed">
    <div class="topnav__icon"><!-- leftIcon SVG --></div>
  </div>
  <div class="topnav__title topnav__title--center"><!-- title --></div>
  <div class="topnav__right"><!-- rightContent --></div>
</div>
```
- Height 52px (based on CSS `.topnav--mobile`)
- If `opts.leftIcon` is omitted, `topnav__icon` will not be rendered

---

#### `DS.searchBar(opts)`
```html
<div style="padding:10px 16px 12px;">
  <div class="aitinput" style="border-radius:12px;background:#f5f6f8;">
    <div class="aitinput__inner" style="flex-direction:row;align-items:center;padding:8px 12px;">
      <div class="aitinput__field" style="flex:1;display:flex;align-items:center;gap:8px;">
        <!-- search icon SVG -->
        <span class="aitinput__placeholder">Search with AI...</span>
      </div>
      <button class="aitinput__send aitinput__send--on"><!-- send SVG --></button>
    </div>
  </div>
</div>
```
- `opts.bg: 'white'` → adds `aitinput--bg-white` class
- Outer padding (`padding:10px 16px 12px`) is built into the function — no additional wrapper needed

---

#### `DS.chipScroll(labels, activeIndex, opts)`
```html
<div style="display:flex;gap:8px;padding:4px 16px 12px;overflow-x:auto;scrollbar-width:none;
  -webkit-mask:linear-gradient(to right,#000 85%,transparent);">
  <span class="chip chip--medium chip--solid-rounded selected">All</span>
  <span class="chip chip--medium chip--solid-rounded-rect">Fashion</span>
  <!-- ...more chips -->
</div>
```
- Active chip: `chip--solid-rounded selected` / Inactive chip: `chip--solid-rounded-rect`
- `opts.size`: `'small'` | `'medium'` (default `'medium'`)

---

#### `DS.aiSuggestionChips(questions, opts)`
```html
<div class="aisc aisc--list">
  <div style="padding:12px 16px 8px;">
    <div style="font-size:12px;font-weight:600;color:rgba(0,0,0,0.56);margin-bottom:8px;">Ask AI</div>
    <div style="display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding-bottom:4px;">
      <div class="aisc-list-row" style="background:#fff;border-radius:10px;padding:8px 12px;...">
        <!-- AI star SVG --> <span class="aisc-list-row-text">question text</span>
        <button class="aisc-send-btn"><!-- send SVG --></button>
      </div>
      <!-- ...more chips -->
    </div>
  </div>
</div>
```
- `opts.title: ''` → hides the title row
- Each chip uses `display:inline-flex` + `flex-shrink:0` → horizontal scroll
- Root wrapper always includes `.aisc` plus a layout class (e.g. `.aisc--list`, `.aisc--chat`, `.aisc--carousel`)

---

#### `DS.templateAiTextInput(opts)`
```html
<div class="aitmpl aitmpl--width-phone" data-aitmpl="true" data-aitmpl-auto-resize="true" data-aitmpl-toggle-chips="true">
  <!-- input + buttons -->
</div>
```
- `opts.autoResize` : Auto-resize textarea based on content
- `opts.maxHeight` : Max height for auto-resize textarea (string, e.g. `'96px'`)
- `opts.redoAnim` : Spin redo icon on click
- `opts.toggleChips` : Hide suggestion chips when input has text
- `opts.floating` : Float input area at bottom
- `opts.width` : `'phone'` or `'full'`

---

#### `DS.productGrid(cards)`
```html
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:0 16px;">
  <!-- DS.productCard() results -->
</div>
```
- Fixed 2-column grid. To dynamically add cards:
```js
const gridEl = document.querySelector('[style*="grid-template-columns"]');
gridEl.innerHTML += DS.productCard({...});  // can append directly
```

---

#### `DS.productCard(opts)`
```html
<div class="pcard" role="article">
  <div class="pcard__img-wrap">
    <div style="background:linear-gradient(135deg,#f0f0f2,#e8e8ec);"><!-- imgIcon --></div>
    <!-- only when badgeLabel is set --> <div style="position:absolute;top:8px;left:8px;"><!-- tag --></div>
    <button class="pcard__wish"><!-- heart SVG --></button>
  </div>
  <div class="pcard__body">
    <span class="pcard__brand">Brand Name</span>
    <span class="pcard__name">Product Name</span>
    <!-- DS.score() result -->
    <div class="pcard__price-row">
      <span class="pcard__price">₩8,900</span>
      <span style="text-decoration:line-through;">₩12,000</span>
    </div>
  </div>
</div>
```

---

#### `DS.bottomNav(items)`
```html
<nav class="ds-bottom-nav" role="navigation" aria-label="Main Navigation"
  style="position:sticky;bottom:0;background:#fff;border-top:1px solid #e4e7ed;
         display:flex;justify-content:space-around;padding:8px 0 20px;z-index:10;">
  <button class="bnav-item" style="display:flex;flex-direction:column;align-items:center;gap:3px;...">
    <div class="bnav-item__icon bnav-item__icon--active" style="color:#0f62fe;"><!-- SVG --></div>
    <span class="bnav-item__label bnav-item__label--active" style="font-size:11px;">Home</span>
  </button>
  <!-- more buttons -->
</nav>
```
- `position:sticky;bottom:0` — sticks below the scrollArea
- Active tab icon color: `#0f62fe` / Inactive: `rgba(0,0,0,0.36)`

---

#### `DS.button(opts)`
```html
<button class="btn btn--large btn--solid-primary">Button Text</button>
```
- `opts.variant`: `'solid-primary'` | `'outline-primary'` | `'outline-secondary'` | `'outline-tertiary'` | `'outline-danger'`
- `opts.size`: `'medium'` | `'large'` | `'xlarge'` | `'xxlarge'`

---

#### `DS.sectionHeader(opts)`
```html
<div style="display:flex;align-items:center;justify-content:space-between;padding:20px 16px 12px;">
  <span style="font-size:16px;font-weight:700;color:#17181a;">Section Title</span>
  <a href="#" style="font-size:13px;color:#2c75fe;font-weight:500;">View All</a>
</div>
```

---

#### `DS.divider(opts)`
```html
<div style="padding:20px 16px 0;"><hr class="divider"></div>
```
- `opts.padding`: default `'20px 16px 0'`

---

### 1-B. DS Function Options Quick Reference

| Function | Key Options |
|---|---|
| `DS.topnav` | `title`, `leftIcon` (SVG string), `rightContent` (HTML string), `titleClass` |
| `DS.searchBar` | `placeholder`, `ariaLabel`, `bg: 'white'\|'gray'` |
| `DS.chipScroll` | `labels[]`, `activeIndex` (default 0), `opts.size: 'small'\|'medium'` |
| `DS.aiSuggestionChips` | `questions[]`, `opts.title` (default `'Ask AI'`, hide with `''`) |
| `DS.badge` | `type: 'number'\|'dot'`, `priority: 'primary'\|'secondary'`, `size: 'small'\|'medium'`, `count` |
| `DS.tag` | `label`, `variant: 'gradient-primary'\|'gradient-secondary'\|'solid-secondary'\|'solid-tertiary'\|'outline-primary'`, `pill` (default true) |
| `DS.score` | `rating` (0–5), `max` (default 5), `trail` (review count text), `size: 'sm'\|'md'` |
| `DS.button` | `label`, `variant`, `size`, `style` (inline CSS), `ariaLabel` |
| `DS.ghostButton` | `label`, `icon` (SVG string), `priority: 'primary'\|'secondary'`, `size`, `iconOnly`, `ariaLabel` |
| `DS.productCard` | `brand`, `name`, `price`, `priceOrig`, `salePriceAlert`, `rating`, `reviewCount`, `badgeLabel`, `badgeVariant`, `imgBg`, `imgIcon`, `ariaLabel` |
| `DS.mediaCard` | `title`, `bodyText`, `tags[]`, `infoRows[]`, `imgBg`, `imgSize: 'md'\|'lg'`, `primaryCta`, `wishButton` |
| `DS.scrollArea` | `children[]`, `opts.paddingBottom` (default `'80px'`), `opts.background`, `opts.className` |
| `DS.phoneFrame` | `children[]`, `opts.bg` (default `'#f5f6f8'`), `opts.clipOverflow` |
| `DS.templateAiTextInput` | `opts.autoResize`, `opts.maxHeight`, `opts.redoAnim`, `opts.toggleChips`, `opts.floating`, `opts.width ('phone'|'full')` |

---

## 2. CSS Class Components — Basic UI

> **Primary Source Files:** `agent-i-ds.css` + `ui/components/{name}.css`

| Component | Root Class | Source File | Variant Classes |
|---|---|---|---|
| Badge | `.badge` | `ui/components/badge.css` | `.badge--number` / `.badge--dot` / `.badge--small` / `.badge--medium` / `.badge--primary` / `.badge--secondary` |
| Avatar | `.avatar` | `ui/components/avatar.css` | `.avatar--xsmall` / `.avatar--small` / `.avatar--medium` / `.avatar--user` / `.avatar--ai` |
| AI Text Input | `.ai-input` | `03_blocks/ai-input.css` | `.ai-input.multiple` / `.ai-input.focused` / `.ai-input.typed` / `.ai-input.disabled` |
| Button | `.btn` | `ui/components/button.css` | `.btn--medium` / `.btn--large` / `.btn--xlarge` / `.btn--xxlarge` / `.btn--solid-primary` / `.btn--outline-primary` / `.btn--outline-secondary` / `.btn--outline-tertiary` / `.btn--outline-danger` |
| Toggle Button | `.toggle-btn` | `ui/components/toggle-button.css` | `.toggle-btn--medium` / `.toggle-btn--large` / `.toggle-btn--xlarge` / `.toggle-btn--xxlarge` / `.toggle-btn.selected` |
| Chip | `.chip` | `ui/components/chip.css` | `.chip--small` / `.chip--medium` / `.chip--large` / `.chip--xlarge` / `.chip--solid-rounded-rect` / `.chip--solid-rounded` / `.chip--outline-gradient` / `.chip.selected` |
| Checkbox | `.checkbox-wrap` | `ui/components/checkbox.css` | `.checkbox` / `.checkbox.selected` / `.checkbox-wrap.state-hovered` / `.checkbox-wrap.state-disabled` |
| Radio Button | `.radio-wrap` | `agent-i-ds.css` L917 | `.radio-btn` / `.radio-dot` / `.radio-wrap--selected` / `.radio-wrap--disabled` |
| Switch | `.sw` | `agent-i-ds.css` L1014 | `.sw--on` / `.sw__thumb` / `.sw.state-disabled` |
| Text Input | `.tinput` | `agent-i-ds.css` L1111 | `.tinput--focused` / `.tinput--error` / `.tinput--disabled` / `.tinput__placeholder` / `.tinput__value` |
| Ghost Button | `.ghost-btn` | `ui/components/ghost-button.css` | `.ghost-btn--small` / `.ghost-btn--medium` / `.ghost-btn--large` / `.ghost-btn--xlarge` / `.ghost-btn--primary` / `.ghost-btn--secondary` |
| Selectable Chip | `.sch` | `agent-i-ds.css` L1744 | `.sch--md` / `.sch--lg` / `.sch--sel` / `.sch--disabled` |
| List Item | `.list-item` | `ui/components/list.css` | `.list-item--divider` / `.list-item--box` / `.list-thumb` / `.list-title` / `.list-sub` |
| Selectable List | `.list-sel` | `ui/components/list-selectable.css` | `.list-sel--unselected` / `.list-sel--selected` / `.list-sel.state-hovered` |
| Progress | `.progress-circle` | `ui/components/progress.css` | `.progress-circle--small` / `.progress-circle--medium` / `.progress-circle--large` / `.progress-bar` / `.progress-bar-fill` |
| Page Indicator | `.page-ind` | `agent-i-ds.css` L955 | `.page-ind--dot` / `.page-ind--overflow` / `.page-ind--numbers` / `.page-ind__dot--active` |
| Pagination | `.pg-wrap` | `ui/components/pagination.css` | `.pg-wrap--pc` / `.pg-wrap--mobile` / `.pg-nav` / `.pg-page` / `.pg-page--selected` |
| Accordion | `.accordion` | `ui/components/accordion.css` | `.accordion-item` / `.accordion-item.open` / `.accordion-header` / `.accordion-content` |
| Divider | `.divider` | `ui/components/divider.css` | — |
| Footer | `.footer` | `ui/components/footer.css` | `.footer--mobile` / `.footer--pc` / `.footer-links` / `.footer-link` |
| Score (Star Rating) | `.score` | `agent-i-ds.css` L2111 | `.score--sm` / `.score--md` / `.score__stars` / `.score__trail` |
| Tag | `.tag` | `agent-i-ds.css` L2028 | `.tag--pill` / `.tag--gradient-primary` / `.tag--gradient-secondary` / `.tag--solid-secondary` / `.tag--solid-tertiary` / `.tag--outline-primary` |
| Tab | `.tab` | `agent-i-ds.css` L2066 | `.tab__item` / `.tab__item--active` / `.tab__item--on` / `.tab__bar` / `.tab__badge` |

---

## 3. CSS Class Components — AI Card Family

> **Primary Source File:** `agent-i-ds.css`

| Component | Root Class | CSS Line | Variant Classes |
|---|---|---|---|
| AI Text Input Template | `.aitinput` | L1473 | `.aitinput--bg` / `.aitinput__inner` / `.aitinput__field` / `.aitinput__field--multi` / `.aitinput__send--on` / `.aitinput__send--off` / `.aitinput__footer` |
| AI Suggestion Chips (Carousel) | `.aisc-carousel` / `.aisc-chip-carousel` | L1539 | `.aisc-card-row` / `.aisc-chip-card` / `.aisc-chip-card-desc` |
| AI Suggestion Chips (List) | `.aisc-list-row` | L1539 | `.aisc-chip-pill` / `.aisc-chip-tag` / `.aisc-chip-icon` / `.aisc-chip-group` / `.aisc-send-btn` |
| Selection Result Card | `.crc` | L1599 | `.crc__header` / `.crc__chips` / `.crc__chip--sel` / `.crc__results` / `.crc__rcard` / `.crc__btn` |
| Question Card | `.qcard` | L1670 | `.qcard--collapsed` / `.qcard--expanded` / `.qcard__chips-h` / `.qcard__chips-d` / `.qcard__list` / `.qcard__input` |
| Selection Card | `.selcard` | L1713 | `.selcard__chip-group` / `.selcard__chip` / `.selcard__chip--sel` / `.selcard__btn-wrap` |
| Card Button | `.cb` | L1755 | `.cb--solid` / `.cb--solid-dis` / `.cb-out-wrap` / `.cb--outline` |
| Chip Group | `.cg` | L1773 | `.cg__row` / `.cg__chip` / `.cg__chip--sel` |
| Agent Hero | `.agent-hero` | L1455 | — (see `agent-i-ds.css` L1455) |
| AI Background | `.aibg` | L1207 | — (see `agent-i-ds.css` L1207) |

---

## 4. CSS Class Components — Card Family

> **Primary Source File:** `agent-i-ds.css`

| Component | Root Class | CSS Line | Variant Classes |
|---|---|---|---|
| Media Card | `.mcard` | L1271 | `.mcard--selected` / `.mcard__img--md` / `.mcard__img--lg` / `.mcard__body--gap12` / `.mcard__title-lg` |
| Basic Card | `.card` | L1349 | — (see `agent-i-ds.css` L1349) |
| List Card — Minimal | `.lcard` | L1405 | — |
| List Card — Thumbnail | `.lcard--thumb` | L1411 | — |
| List Card — Gallery | `.lcard--gallery` | L1425 | — |
| Review Card | `.review-card` | L1431 / L1880 | `.review-card__score` / `.review-card__body` |
| Info Card | `.info-card` | L1443 / L1838 | `.info-card__title` / `.info-card__body` |
| Thumbnail | `.thumb` | L1170 | `.thumb--r11` / `.thumb--r43` / `.thumb--r32` / `.thumb--r169` / `.thumb--cropped` / `.thumb--uncropped` |
| Media Card Thumbnail | `.mcard-thumb` | L1925 | — |
| Media Card Tag Group | `.mcard-tag-group` | L1932 | — |
| Card Expand | `.card-expand` | L1938 | — |
| Carousel | `.carousel` | L1948 | `.carousel__track` / `.carousel__item` |
| Result Pattern | `.result` | L1779 | `.result__list` / `.result__item` / `.result__card` |

---

## 5. CSS Class Components — Message Family

> **Primary Source File:** `agent-i-ds.css` L2132
> **Key Insight:** Understanding the built-in flex layout, gap, and indent of each class eliminates the need for manual margins.

### Message Component Built-in Behavior Notes

#### `.msg-item` — Basic Text Message (Avatar + Text)
```css
/* Actual CSS (L2144) */
display: flex; gap: 8px; align-items: flex-start; width: 100%;
```
- **Avatar (32px) + gap (8px) handled automatically** — `.msg-text-body` takes up the remaining space with `flex:1`
- No need to manually specify `padding-left`. The `gap:8px` handles the avatar spacing automatically.

#### `.msg-ai` — AI Response Container
```css
/* Actual CSS (L2164) */
display: flex; flex-direction: column; gap: 4px; width: 100%;
```
- **gap 4px automatically applied** between inner elements (`.msg-ai-header`, `.msg-ai-content`)

#### `.msg-ai-header` — AI Name Row (Avatar + Name)
```css
/* Actual CSS (L2165) */
display: flex; gap: 8px; align-items: center;
```
- **flex row, gap 8px applied automatically** — avatar (32px) and name text aligned automatically

#### `.msg-ai-content` — AI Response Body Area
```css
/* Actual CSS (L2167) */
display: flex; flex-direction: column; gap: 16px; width: 100%;
```
- **gap 16px applied automatically** between body blocks (cards, text, lists)
- If you need a 40px left indent to match the `.msg-ai-header` avatar (32px) + gap (8px), add `padding-left:40px` manually.

#### `.msg-ai-body` — AI Response Section Container
```css
/* Actual CSS (L2169) */
display: flex; flex-direction: column; gap: 8px;
```
- **gap 8px applied automatically** to `.msg-ai-title` + `.msg-ai-list` groupings

#### `.msg-loading` — Loading Spinner Row
```css
/* Actual CSS (L2181) */
display: flex; gap: 8px; align-items: center;
```
- **flex row, gap 8px applied automatically** — spinner (20px) and text aligned automatically

#### `.msg-item--user-bubble` — User Bubble Message
```css
/* Actual CSS (L2151) */
display: flex; align-items: center; justify-content: flex-end;
padding: 4px 0; width: 100%;
```
- **Right-aligned automatically** — bubble is pinned to the right via `flex-end`

#### `.msg-bubble` — User Bubble Body
```css
/* Actual CSS (L2155) */
background: rgba(48, 131, 253, 0.16);
border-radius: 16px; padding: 12px 16px;
max-width: 286px;  /* ~73% of a 390px frame */
font-size: 16px; line-height: 26px;
```

### Full Message Component List

| Component | Root Class | CSS Line | Variant Classes |
|---|---|---|---|
| Message (Text) | `.msg-item` | L2132 | `.msg-avatar` / `.msg-avatar--ai` / `.msg-avatar--user` / `.msg-text-body` / `.msg-text` |
| Message Bubble (User) | `.msg-item--user-bubble` | L2151 | `.msg-bubble` |
| AI Message | `.msg-ai` | L2164 | `.msg-ai-header` / `.msg-ai-name` / `.msg-ai-content` / `.msg-ai-body` / `.msg-ai-title` / `.msg-ai-list` |
| Message (Loading) | `.msg-loading` | L2181 | `.msg-loading__spinner` / `.msg-loading__text` |
| Message (Expandable) | `.msg-expandable` | L2199 | `.msg-expandable--collapsed` / `.msg-expandable--expanded` / `.msg-expandable__bubble` / `.msg-expandable__btn` |
| Message Action Bar | `.mab` | L983 | `.mab__pill` / `.mab__btn` / `.mab__btn--selected` / `.mab__divider` |
| Toast | `.toast` | L1147 | `.toast__left` / `.toast__icon` / `.toast__title` / `.toast__desc` / `.toast__action` |
| Tooltip | `.tooltip` | L1051 | `.tooltip__box` / `.tooltip--top` / `.tooltip--bottom` / `.tooltip__title` / `.tooltip__text` / `.tooltip__close` |

---

## 6. CSS Class Components — Layout & Navigation

> **Primary Source File:** `agent-i-ds.css`

| Component | Root Class | CSS Line | Variant Classes |
|---|---|---|---|
| Top Navigation | `.topnav` | L1234 | `.topnav--mobile` / `.topnav__left` / `.topnav__left--fixed` / `.topnav__title` / `.topnav__title--center` / `.topnav__title--left` / `.topnav__right` / `.topnav__icon` / `.topnav__avatar` |
| Menu | `.menu` | L1977 | `.menu__item` / `.menu__item--active` |

---

## 7. CSS Class Components — Overlay Family

> **Primary Source File:** `agent-i-ds.css`

| Component | Root Class | CSS Line | Variant Classes |
|---|---|---|---|
| Modal | `.modal` | L1996 | `.modal__overlay` / `.modal__sheet` / `.modal__header` / `.modal__body` |

---

## 8. Design Tokens

> **Source Folder:** `tokens/`
> **Bulk Import:** `@import "@agent-i/design-system/tokens/index.css"`

| Token Type | File | CSS Variable Prefix | Example |
|---|---|---|---|
| Color | `tokens/colors.css` | `--color-*` | `--color-blue-8: #0f62fe` / `--color-content-primary: #17181a` / `--color-background-key: #0f62fe` |
| Spacing | `tokens/spacing.css` | `--spacing-*` / `--size-*` | `--spacing-4: 16px` (4px base) |
| Border Radius | `tokens/radius.css` | `--border-radius-*` | `--border-radius-100: 4px` |
| Shadow | `tokens/shadow.css` | `--shadow-*` | elevation 0–4 |
| Typography | `tokens/typography.css` | `--font-*` / `--line-height-*` | `--font-size-100: 16px` / `--font-weight-bold: 700` |
| Motion | `tokens/motion.css` | `--duration-*` / `--easing-*` | Duration, Easing, reduced-motion support |

### Semantic Color Variables

| Variable | Purpose | Value |
|---|---|---|
| `--color-background-primary` | Main background | `#ffffff` |
| `--color-background-secondary` | Secondary background | `#f0f2f7` |
| `--color-background-key` | Brand color | `#0f62fe` |
| `--color-content-primary` | Main text | `#17181a` |
| `--color-content-secondary` | Secondary text | `rgba(0,0,0,0.76)` |
| `--color-content-tertiary` | Tertiary text | `rgba(0,0,0,0.56)` |
| `--color-background-alert` | Error | `#d62228` |
| `--color-background-success` | Success | `#147f3a` |

---

## 9. Themes

> **Source Folder:** `theme/`
> **Bulk Import:** `@import "@agent-i/theme/index.css"`

| Theme | File | How to Apply |
|---|---|---|
| Light (default) | `theme/light.css` | `:root` / `[data-theme="light"]` / `.theme-light` |
| Dark | `theme/dark.css` | `[data-theme="dark"]` / `.theme-dark` / `@media (prefers-color-scheme: dark)` |
| Brand Override | `theme/brand.css` | `:root { --brand-primary-h: 262; --brand-primary-s: 75%; --brand-primary-l: 50%; }` |
| Theme Bundle | `theme/index.css` | Loads light + dark together (light by default + prefers-color-scheme auto) |

### Theme Variables (defined in light.css)

| Variable | Description |
|---|---|
| `--color-primary` | Brand primary (light: `#0f62fe`) |
| `--color-surface` | Surface background |
| `--color-on-surface` | Text on surface |
| `--color-outline` | Border color |

---

## 10. Icons

> **Source Folder:** `ui/icons/`
> **JS API:** `ui/icons/index.js` / `ui/icons/icons.ts`
> **Styles:** Two variants — outline and solid

| Type | Folder | File Format |
|---|---|---|
| Outline | `ui/icons/outline/` | `.svg` |
| Solid | `ui/icons/solid/` | `.svg` |

### Icon Loading Methods

```html
<!-- Method 1: img tag (no color control) -->
<img src="/images/agent-i-design-system/ui/icons/outline/cart.svg" width="24" height="24" alt="Cart">

<!-- Method 2: CSS mask-image (color control via currentColor) -->
<span style="
  display:inline-block; width:24px; height:24px;
  -webkit-mask:url('/images/agent-i-design-system/ui/icons/outline/cart.svg') center/contain no-repeat;
  mask:url('/images/agent-i-design-system/ui/icons/outline/cart.svg') center/contain no-repeat;
  background-color:currentColor;">
</span>

<!-- Method 3: fetch + innerHTML (full control — color, animation, etc.) -->
<div class="icon-wrap" data-icon="cart"></div>
<script>
  document.querySelectorAll('[data-icon]').forEach(async el => {
    const name = el.dataset.icon;
    const res = await fetch(`/images/agent-i-design-system/ui/icons/outline/${name}.svg`);
    el.innerHTML = await res.text();
  });
</script>
```

### Available Icon Filenames (verified from outline/ folder)

**General:** `arrow-down` / `arrow-left` / `arrow-right` / `arrow-up` / `arrow-turn-down-right` / `arrows-diagonal-in` / `arrows-diagonal-out` / `bars` / `bell` / `browser` / `bulb` / `camera` / `cart` / `chart-bar` / `chat-ellipsis` / `chat-lines` / `check` / `check-circle` / `chevron-down` / `chevron-left` / `chevron-right` / `chevron-up` / `clock` / `code-reader` / `coins` / `coupon` / `credit-card` / `cross` / `cross-circle` / `desktop` / `earth` / `ellipsis-horizontal` / `ellipsis-vertical` / `envelope` / `heart` / `home` / `info-circle` / `microphone` / `mobile` / `moon` / `palette` / `paper-plane` / `paperclip` / `pen` / `phone` / `plus` / `plus-circle` / `qr-code-small` / `question-circle` / `question-text-circle` / `redo` / `search` / `share-aos` / `share-ios` / `sidebar` / `sliders-horizontal` / `squares` / `stop` / `sun` / `sync` / `thumb-down` / `thumb-up` / `times-circle` / `trash` / `undo` / `user` / `users` / `wallet`

**Category-specific:** `air-conditioner` / `balloons` / `baseball-ball` / `bus` / `car` / `conical-flask` / `earphones` / `plane-departure` / `refrigerator` / `rice-cooker` / `ship` / `television` / `train` / `vacuum-cleaner` / `video-camera` / `volume-slash` / `walk` / `washing-machine` / `yen-circle`

> **Note:** Use the filename as-is in the SVG URL (including the `.svg` extension)

---

## 11. Layout Composition Patterns

> Two commonly used page structures. Copy and use directly.

---

### Pattern A — Product List / General Page

Top Nav + Sticky Header (Search + Chip Filter) + Scroll Area + Bottom Nav

```js
document.getElementById('app').innerHTML = DS.phoneFrame([
  DS.stickyHeader([
    DS.topnav({
      title: 'Shopping',
      rightContent: `<img src="/images/agent-i-design-system/ui/icons/outline/cart.svg" width="24" height="24" alt="Cart">`
    }),
    DS.searchBar({ placeholder: 'Ask AI for product recommendations', bg: 'gray' }),
    DS.chipScroll(['All', 'Fashion', 'Electronics', 'Food', 'Beauty'], 0),
  ]),
  DS.scrollArea([
    DS.sectionHeader({ title: 'Recommended Products', link: 'View All' }),
    DS.productGrid([
      DS.productCard({ brand: 'Brand A', name: 'Product Name 1', price: '₩8,900', rating: 4.5, reviewCount: '(214)', badgeLabel: 'NEW' }),
      DS.productCard({ brand: 'Brand B', name: 'Product Name 2', price: '₩12,000', priceOrig: '₩18,000', salePriceAlert: true, rating: 4, reviewCount: '(89)', badgeLabel: 'SALE', badgeVariant: 'gradient-secondary' }),
    ]),
    DS.divider(),
    DS.sectionHeader({ title: "Editor's Pick" }),
    DS.mediaCard({
      title: 'Trending Items This Week',
      bodyText: 'Discover the items leading the trend.',
      tags: ['Fashion', 'New Arrivals'],
      primaryCta: 'Learn More',
    }),
  ]),
  DS.bottomNav([
    { label: 'Home', icon: `<img src="/images/agent-i-design-system/ui/icons/outline/home.svg" width="24" height="24" alt="">`, active: true },
    { label: 'Search', icon: `<img src="/images/agent-i-design-system/ui/icons/outline/search.svg" width="24" height="24" alt="">` },
    { label: 'Cart', icon: `<img src="/images/agent-i-design-system/ui/icons/outline/cart.svg" width="24" height="24" alt="">`, badge: '3' },
    { label: 'My Page', icon: `<img src="/images/agent-i-design-system/ui/icons/outline/user.svg" width="24" height="24" alt="">` },
  ]),
]);
```

---

### Pattern B — Chat Page (Fixed Bottom Input)

AI Chat UI: Top Nav + Scrollable Message Area + Fixed Bottom Input

**Layout guideline:** Chat screens should default to full-viewport width/height on mobile (no outer device frame) so the message area occupies the full screen.

```js
document.getElementById('app').innerHTML = DS.phoneFrame([
  // 1. Top Nav (back button + AI name)
  DS.topnav({
    title: 'AI Shopping Assistant',
    leftIcon: `<img src="/images/agent-i-design-system/ui/icons/outline/chevron-left.svg" width="24" height="24" alt="Back">`,
  }),

  // 2. Message scroll area (flex:1 + overflow-y:auto)
  `<div style="flex:1;overflow-y:auto;padding:16px;" id="scroll-area">
    <div class="chat-messages" id="chat-messages">

      <!-- AI message example -->
      <div class="msg-ai" style="margin-bottom:16px;">
        <div class="msg-ai-header">
          <div class="msg-avatar msg-avatar--ai"></div>
          <span class="msg-ai-name">AI Assistant</span>
        </div>
        <div class="msg-ai-content">
          <span class="msg-ai-intro">Hello! What product are you looking for?</span>
        </div>
      </div>

      <!-- User bubble message example -->
      <div class="msg-item--user-bubble" style="margin-bottom:16px;">
        <div class="msg-bubble">Recommend a good budget wireless earphone</div>
      </div>

      <!-- Loading state example -->
      <div class="msg-loading" style="margin-bottom:16px;">
        <div class="msg-loading__spinner"></div>
        <span class="msg-loading__text">AI is generating a response...</span>
      </div>

    </div>
  </div>`,

  // 3. Fixed bottom input area
  `<div style="background:#fff;border-top:1px solid #e4e7ed;padding-bottom:env(safe-area-inset-bottom);">
    ${DS.aiSuggestionChips([
      'Tell me the price range',
      'Best reviewed ones',
      'Latest releases',
    ], { title: '' })}
    <div style="padding:8px 16px 12px;">
      <div class="aitinput" style="border-radius:12px;background:#f5f6f8;">
        <div class="aitinput__inner" style="flex-direction:row;align-items:center;padding:8px 12px;">
          <textarea class="aitinput__field aitinput__field--multi"
            placeholder="Type a message..."
            style="flex:1;border:none;background:transparent;resize:none;font-size:15px;line-height:22px;max-height:120px;overflow-y:auto;"></textarea>
          <button class="aitinput__send aitinput__send--on" id="send-btn">
            <!-- Send SVG: use DS._SEND_SVG(16) or insert directly -->
          </button>
        </div>
      </div>
    </div>
  </div>`,
]);

// Example: dynamically append messages
function appendUserMessage(text) {
  document.getElementById('chat-messages').innerHTML += `
    <div class="msg-item--user-bubble" style="margin-bottom:16px;">
      <div class="msg-bubble">${text}</div>
    </div>`;
  document.getElementById('scroll-area').scrollTop = 999999;
}

function appendAiMessage(text) {
  document.getElementById('chat-messages').innerHTML += `
    <div class="msg-ai" style="margin-bottom:16px;">
      <div class="msg-ai-header">
        <div class="msg-avatar msg-avatar--ai"></div>
        <span class="msg-ai-name">AI Assistant</span>
      </div>
      <div class="msg-ai-content">
        <span class="msg-ai-intro">${text}</span>
      </div>
    </div>`;
  document.getElementById('scroll-area').scrollTop = 999999;
}
```

---

## 12. Summary

| Category | Component Count |
|---|---|
| DS Functions (JS) | 18 |
| Basic UI (CSS) | 23 |
| AI Card Family (CSS) | 10 |
| Card Family (CSS) | 13 |
| Message Family (CSS) | 8 |
| Layout & Navigation (CSS) | 2 |
| Overlay (CSS) | 1 |
| **Total Components** | **75** |
| Design Token Files | 6 |
| Theme Files | 4 |
| Icons (outline + solid) | ~160 |

---

*This file is an index generated by directly analyzing `agent-i-components.js`, `agent-i-ds.css`, `ui/components/`, `tokens/`, `theme/`, and `ui/icons/outline/`. Please update it when new components are added.*
