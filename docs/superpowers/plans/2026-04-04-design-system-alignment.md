# Design System Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align the portfolio codebase with the Vercel-inspired design system in `DESIGN.md` — fixing font family, heading weights, letter-spacing, card shadows, and badge styling.

**Architecture:** Add named design tokens to `tailwind.config.ts` (font, letter-spacing, shadow stacks), then update each component to use those tokens. No new files created — all changes are targeted edits to existing files.

**Tech Stack:** Next.js 15, Tailwind CSS 3, `geist` npm package (Vercel's official font), `class-variance-authority` (badge variants)

**Spec:** `docs/superpowers/specs/2026-04-04-design-system-alignment-design.md`

---

## Task 1: Install Geist font + update layout.tsx

**Files:**

- Modify: `package.json` (via pnpm)
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Install the geist package**

```bash
pnpm add geist
```

Expected output: something like `+ geist 1.x.x` added to dependencies.

- [ ] **Step 2: Update layout.tsx — swap font imports**

Replace lines 7–14 in `src/app/layout.tsx`:

```tsx
// REMOVE these lines:
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

// ADD these lines instead:
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
```

- [ ] **Step 3: Update layout.tsx — update body className**

In the `RootLayout` return, update the body `className` (line 69–71):

```tsx
// BEFORE:
className={cn(
    "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
    fontSans.variable
)}

// AFTER:
className={cn(
    "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
    GeistSans.variable,
    GeistMono.variable
)}
```

- [ ] **Step 4: Start dev server and verify font change**

```bash
pnpm dev
```

Open http://localhost:3000. The heading font should look noticeably more geometric and compressed than Inter — Geist has tighter stroke contrast and a more engineered feel. If the font looks identical, the CSS variable wiring is wrong — check that `GeistSans.variable` is `--font-geist-sans` in browser DevTools.

- [ ] **Step 5: Commit**

```bash
git add package.json pnpm-lock.yaml src/app/layout.tsx
git commit -m "feat: swap Inter for Geist Sans and Geist Mono fonts"
```

---

## Task 2: Add design tokens to tailwind.config.ts

**Files:**

- Modify: `tailwind.config.ts`

- [ ] **Step 1: Update fontFamily to use Geist CSS variables**

In `tailwind.config.ts`, replace the existing `fontFamily` block inside `theme.extend`:

```ts
// BEFORE:
fontFamily: {
    sans: ["var(--font-sans)", ...fontFamily.sans],
},

// AFTER:
fontFamily: {
    sans: ["var(--font-geist-sans)", ...fontFamily.sans],
    mono: ["var(--font-geist-mono)", ...fontFamily.mono],
},
```

- [ ] **Step 2: Add letterSpacing tokens**

Inside `theme.extend`, after the `fontFamily` block, add:

```ts
letterSpacing: {
    display:      "-2.4px",
    heading:      "-2.4px",
    subheading:   "-1.28px",
    "card-title": "-0.96px",
    ui:           "-0.32px",
},
```

- [ ] **Step 3: Add boxShadow tokens**

Inside `theme.extend`, after the `letterSpacing` block, add:

```ts
boxShadow: {
    card:        "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, rgba(0,0,0,0.04) 0px 8px 8px -8px, #fafafa 0px 0px 0px 1px inset",
    "card-hover":"rgba(0,0,0,0.12) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 4px, rgba(0,0,0,0.06) 0px 12px 12px -8px, #fafafa 0px 0px 0px 1px inset",
    border:      "rgba(0,0,0,0.08) 0px 0px 0px 1px",
},
```

- [ ] **Step 4: Verify build still compiles**

```bash
pnpm build
```

Expected: successful build with no TypeScript or Tailwind errors. If you see `Unknown theme key 'letterSpacing'`, you placed the block outside `theme.extend` — move it inside.

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat: add Geist font, letterSpacing, and shadow-card design tokens to Tailwind"
```

---

## Task 3: Update typography in page.tsx

**Files:**

- Modify: `src/app/page.tsx`

- [ ] **Step 1: Fix hero heading (line 23)**

```tsx
// BEFORE:
className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"

// AFTER:
className="text-3xl font-semibold tracking-display sm:text-5xl xl:text-6xl/none"
```

- [ ] **Step 2: Fix section headings — About, Skills, Work Experience, Education**

There are four identical headings at lines 47, 58, 91, and 120 with the pattern `text-xl font-bold`. Update all four:

```tsx
// BEFORE (×4, one each for About / Skills / Work Experience / Education):
className="text-xl font-bold"

// AFTER (×4):
className="text-[40px] font-semibold tracking-heading leading-tight"
```

The four locations:

- Line 47: `<h2 className="text-xl font-bold">About</h2>`
- Line 58: `<h2 className="text-xl font-bold">Skills</h2>`
- Line 91: `<h2 className="text-xl font-bold">Work Experience</h2>`
- Line 120: `<h2 className="text-xl font-bold">Education</h2>`

- [ ] **Step 3: Fix Projects and Contact headings (lines 148 and 189)**

Both headings share the same className pattern:

```tsx
// BEFORE (×2):
className="text-3xl font-bold tracking-tighter sm:text-5xl"

// AFTER (×2):
className="text-3xl font-semibold tracking-display sm:text-5xl"
```

- [ ] **Step 4: Fix skills category labels — remove positive tracking (line 71)**

```tsx
// BEFORE:
className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"

// AFTER:
className="text-xs font-semibold text-muted-foreground uppercase tracking-normal"
```

- [ ] **Step 5: Verify visually in dev server**

With `pnpm dev` running, check http://localhost:3000:

- Hero name should be noticeably more compressed (tighter letter-spacing)
- "About", "Skills", "Work Experience", "Education" headings should be roughly 40px — substantially larger than before
- Skills category labels (e.g. "Backend", "Cloud & Infra") should not have extra-wide spacing between letters

- [ ] **Step 6: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: update page.tsx headings to Geist design tokens — semibold weight and tight tracking"
```

---

## Task 4: Add shadow-card to card components

**Files:**

- Modify: `src/components/project-card.tsx`
- Modify: `src/components/experience-card.tsx`
- Modify: `src/components/resume-card.tsx`

- [ ] **Step 1: Update project-card.tsx — replace border with shadow-card**

In `src/components/project-card.tsx`, update the `Card` className (line 44–48):

```tsx
// BEFORE:
<Card
    className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
    }
>

// AFTER:
<Card
    className={
        "flex flex-col overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 ease-out h-full"
    }
>
```

- [ ] **Step 2: Update project-card.tsx — add tracking to CardTitle**

On line 75, update `CardTitle`:

```tsx
// BEFORE:
<CardTitle className="mt-1 text-base">{title}</CardTitle>

// AFTER:
<CardTitle className="mt-1 text-base font-medium tracking-ui">{title}</CardTitle>
```

- [ ] **Step 3: Update experience-card.tsx — add shadow-card to Card**

In `src/components/experience-card.tsx`, line 49:

```tsx
// BEFORE:
<Card className="flex">

// AFTER:
<Card className="flex shadow-card">
```

- [ ] **Step 4: Update resume-card.tsx — add shadow-card to Card**

In `src/components/resume-card.tsx`, line 44:

```tsx
// BEFORE:
<Card className="flex">

// AFTER:
<Card className="flex shadow-card">
```

- [ ] **Step 5: Verify visually in dev server**

With `pnpm dev` running, check http://localhost:3000:

- Project cards should have a subtle multi-layer shadow visible at rest — no harsh solid border line. The card should look slightly lifted with a soft inner glow.
- Work Experience and Education cards should have the same subtle shadow.
- Hovering a project card should deepen the shadow slightly.

In dark mode (toggle via the navbar): the shadow-card is light-mode-tuned (`#fafafa` inner ring). Visually verify dark mode still looks acceptable — the light inner ring may be less visible, which is expected behavior.

- [ ] **Step 6: Commit**

```bash
git add src/components/project-card.tsx src/components/experience-card.tsx src/components/resume-card.tsx
git commit -m "feat: replace CSS border with shadow-card multi-layer shadow on all card components"
```

---

## Task 5: Update badge.tsx

**Files:**

- Modify: `src/components/ui/badge.tsx`

- [ ] **Step 1: Update base classes — rounded-full and font-medium**

In `src/components/ui/badge.tsx`, update the base string in `cva()` (line 7):

```tsx
// BEFORE:
"inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",

// AFTER:
"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
```

- [ ] **Step 2: Update secondary variant — blue tint**

In the `variants.variant` object (line 14):

```tsx
// BEFORE:
secondary:
    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",

// AFTER:
secondary:
    "border-transparent bg-[#ebf5ff] text-[#0068d6] hover:bg-[#dbeeff]",
```

- [ ] **Step 3: Verify visually in dev server**

With `pnpm dev` running, check http://localhost:3000:

- Tech stack tags on project cards (e.g. "Next.js", "TypeScript") should now be pill-shaped (fully rounded ends) with a light blue tint background and blue text.
- The "Open to Work" badge on the hero (if using `default` variant) should remain dark/unchanged.
- Badges inside Work Experience cards (e.g. "Full-Time") should also be pill-shaped now.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/badge.tsx
git commit -m "feat: update badge to pill shape (rounded-full) with blue-tinted secondary variant"
```

---

## Task 6: Final build + lint verification

**Files:** none modified

- [ ] **Step 1: Run lint**

```bash
pnpm lint
```

Expected: no errors. If you see `font-geist-sans` or `font-geist-mono` lint errors related to unknown CSS variables, those are false positives from the CSS variable naming — they are safe to ignore or suppress with a comment.

- [ ] **Step 2: Run production build**

```bash
pnpm build
```

Expected: successful build. Watch for:
- TypeScript errors in modified files
- Tailwind purge warnings about unused classes (harmless)
- Any `Module not found` for `geist/font/sans` or `geist/font/mono` — if this happens, verify the `geist` package is installed (`pnpm list geist`)

- [ ] **Step 3: Final visual check — full page walkthrough**

With `pnpm dev` running, walk through http://localhost:3000 and verify:

| Element | Expected |
|---------|----------|
| Body font | Geometric Geist Sans (not humanist Inter) |
| Hero name | Tight negative letter-spacing, weight 600 |
| Section headings (About / Skills / Work / Education) | ~40px, tight tracking |
| Skills category labels | No extra-wide letter spacing |
| Project cards | Subtle multi-layer shadow at rest, no border line |
| Experience / Education cards | Same subtle shadow |
| Tech stack badges | Pill shape, light blue tint |
