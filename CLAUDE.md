# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A modular, single-page HTML presentation for a lecture titled *"Inteligência Artificial na Produção Científica"* by Gerley Adriano Miranda Cruz. No build step, no package manager — open `index.html` directly in a browser (or serve with any static server).

## File structure

```
index.html          Shell: loads CSS + 3 JS files in order
css/styles.css      All styles (design tokens, components, layout)
js/components.js    Pure HTML-string helper functions (no framework)
js/slides.js        SLIDES array — one object per slide
js/deck.js          Navigation engine (renders slides, wires events)
```

**Load order in index.html is required:** `components.js` → `slides.js` → `deck.js`.

## How to add or edit a slide

Open `js/slides.js` and add an object to the `SLIDES` array:

```js
{
  id: 's22',                       // unique, any string
  render(i, total) {
    return `<div class="surface">
      ${eyebrow('Section · Topic')}
      <h2>Title <em>with accent</em></h2>
      <!-- content here -->
      ${slideNumEl(i + 1, total)}
      ${speakerTagEl(SPEAKER)}
    </div>`;
  },
},
```

Slide numbers and the total count update automatically. No other file needs to change.

## Surface types

Each slide's `render()` returns a `<div class="surface ...">`. Three variants:

| Class | Appearance | When to use |
|---|---|---|
| `surface` | Cream background | Default content slides |
| `surface cover-surface` | Dark background, add `<div class="cover-grid"></div>` as first child | Opening / closing |
| `surface divider-surface` | Green background, add `<div class="section-num">Roman</div>` at bottom | Section dividers |

## Component helpers (js/components.js)

All functions return HTML strings and are globally available.

| Function | Output |
|---|---|
| `eyebrow(text)` | Small uppercase label with accent line |
| `rule()` | Short horizontal rule |
| `slideNumEl(current, total)` | `"01 / 22"` counter, bottom-right |
| `speakerTagEl(name)` | Speaker name, top-right |
| `ph(text)` | Italic placeholder span inside prompt boxes |
| `card({ num?, title, body, tags? })` | Card with optional number and tag chips |
| `grid(cols, items[], mt?)` | CSS grid wrapper (cols = 2, 3, or 4) |
| `twoCol(left, right, mt?)` | Two-column layout |
| `checklist(items[])` | Styled list; each item: `{ icon?, iconStyle?, text }` |
| `stepList(items[])` | Numbered step list; each item: `{ num, title, body }` |
| `promptLabel(text)` | Small uppercase label above prompt box |
| `promptBox(html)` | Dark monospace box for prompt examples |
| `toolsTable(headers[], rows[][])` | Scrollable comparison table |
| `pyramidSVG()` | Evidence pyramid SVG + legend |

Tag chips passed to `card()` use `{ cls: 'free' | 'paid', label: string }`.

## Design tokens (css/styles.css)

All colors and the font stack live on `:root`:

```
--bg, --bg-alt       Cream backgrounds
--ink, --ink-soft, --ink-muted   Text hierarchy
--accent, --accent-light, --accent-pale   Green palette
--rule               Border/divider color
--serif              Font stack
```

To retheme, change values on `:root` only.
