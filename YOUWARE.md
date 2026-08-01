# CUSTOM PRNTS — Design Studio Platform

## Project Overview
A custom design studio platform where users turn ideas into designs. Printing is one possible output among several. Built with React, TypeScript, Vite, and Tailwind CSS.

## Brand Identity
- **Name**: CUSTOM PRNTS
- **Tagline**: "TURN YOUR IDEA INTO A DESIGN"
- **Colors**: Black (#0A0A0A) / White (#FAFAFA) base with Royal Blue (#1E3A8A) accent
- **Fonts**: Bebas Neue (stencil headlines), Oswald (headings), Barlow Condensed (UI), Barlow (body)

## Architecture
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS 3.4 with custom theme
- **Components**: 7 main components in `src/components/`

## Homepage Sections (Studio-First)
```
src/components/
├── SiteHeader.tsx       — Unified header: dark bar, house icon + Wordmark, breadcrumb nav, CTA
├── Wordmark.tsx         — Text logo: "CUSTOM" bold white + "PRNTS" grey (replaces SVG Logo)
├── Hero.tsx             — Static hero: "Turn Your Idea Into a Design" + Start Creating CTA
├── TheJourney.tsx       — Interactive horizontal strip: Idea→Interview→Concepts→Edit→Preview→Produce
├── TryItLive.tsx        — Interactive canvas preview demo (live text/color controls)
├── Gallery.tsx          — "Made in the Studio" inspiration rail
├── Footer.tsx           — Full footer with Wordmark, links, social icons
└── Navbar.tsx           — Legacy nav (replaced by SiteHeader)
```

## Design Studio (/studio)
A standalone design workflow accessible at `/studio` with its own dark premium theme:

### Flow
1. **Projects** — Browse/load saved projects
2. **Interview** — Sequential Q&A (one question at a time, chat-like flow)
3. **Concept Selection** — AI-generated concept options
4. **Design Editor** — Fabric.js canvas with full toolbar/properties
5. **Preview** — Shirt mockup preview with sizing/placement controls
6. **Produce** — Three equal choices: Order Print / Download Files / Save Project

### Files
```
src/studio/
├── StudioApp.tsx        — Main studio router (views: projects → new-project → concepts → editor → preview → produce)
├── getNextQuestion.ts   — Sequential interview question generator (swappable for real AI)
├── conceptGenerator.ts  — Mock AI concept generator (swap generateConcepts() body for real API)
├── exportService.ts     — Export: Transparent PNG / PNG with background / Project JSON
├── storage.ts           — IndexedDB service (cp-studio database, browser-local)
├── store.ts             — React state management (useStudioStore hook)
├── index.ts             — Public exports
└── pages/
    ├── ProjectsPage.tsx        — Project grid/list with create/open/delete
    ├── NewProjectPage.tsx      — Sequential Interview UI (chat-like Q&A)
    ├── ConceptSelectionPage.tsx — Canvas-rendered concept previews
    ├── DesignEditorPage.tsx    — Fabric.js canvas editor (551 lines)
    ├── ShirtPreviewPage.tsx    — Preview page (renamed from ShirtPreview → Preview)
    └── ProducePage.tsx         — Produce step: Order Print / Download / Save Project
```

### Interview Flow (getNextQuestion)
- Questions are defined in `getNextQuestion.ts` with types: text, textarea, select, color-swatches
- `getNextQuestion(brief)` returns the next unanswered question or null (review step)
- UI shows answered questions collapsed, current question active, Next/Skip buttons
- Final review step before "Generate Concepts"
- **To swap for AI**: Replace the body of `getNextQuestion()` — the Interview UI remains unchanged

### Produce Step
Three equal choices (not a checkout funnel):
1. **Order Print** — Pickup (3hrs) or Delivery (2-5 days)
2. **Download Files** — Transparent PNG / PNG with background / Project JSON
3. **Save Project** — Browser storage persistence

### Key Features
- IndexedDB storage with autosave (1s debounce)
- Fabric.js 5.3 canvas (CDN-loaded)
- Fabric.js history stack with undo/redo
- Canvas JSON serialization for project persistence
- Thumbnail capture for project cards

## Build
```bash
pnpm install && pnpm run build
```

## Homepage Strategy
The homepage is Studio-first:
- **Hero**: Single headline + single CTA → /studio
- **The Journey**: Animated horizontal strip showing the 6-step design pipeline
- **Try It Live**: Interactive canvas demo with text/color controls
- **Gallery**: "Made in the Studio" inspiration examples (secondary)
- No storefront carousel, no "How It Works" cards, no product grid
