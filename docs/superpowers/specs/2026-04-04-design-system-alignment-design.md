# Design System Alignment

**Date:** 2026-04-04
**Scope:** Align portfolio codebase with the Vercel-inspired design system documented in `DESIGN.md`

## Context

Six gaps were identified between the current implementation and `DESIGN.md`:

1. Font family is Inter (Google Fonts) — should be Geist Sans + Geist Mono
2. Headings use `font-bold` (weight 700) — max allowed weight is 600
3. Letter-spacing uses Tailwind's `tracking-tighter` (~-1.8px) instead of explicit values (-2.4px to -2.88px); skills category labels incorrectly use `tracking-wider` (positive tracking)
4. Cards use CSS `border` — should use shadow-as-border technique with multi-layer shadow stacks
5. Badges use `rounded-md` (4px) — should be full pills (9999px) with tinted blue background
6. Section headings are `text-xl` (20px) — spec calls for ~40px with tight tracking

## Approach

Design tokens in `tailwind.config.ts`. Named tokens for shadows, letter-spacing, and font family. Components reference semantic class names (`shadow-card`, `tracking-display`) rather than arbitrary values. Single source of truth for all design values.

## Changes

### 1. Package

**`package.json`**
- Add `geist` (Vercel's official font package)

### 2. Foundation — layout + Tailwind config

**`src/app/layout.tsx`**
- Remove: `import { Inter as FontSans } from "next/font/google"`
- Add: `import { GeistSans } from "geist/font/sans"` and `import { GeistMono } from "geist/font/mono"`
- Update body `className` to include `GeistSans.variable` and `GeistMono.variable`
- Remove the old `fontSans` const

**`tailwind.config.ts`** — add to `theme.extend`:

```ts
fontFamily: {
  sans: ["var(--font-geist-sans)", ...fontFamily.sans],
  mono: ["var(--font-geist-mono)", ...fontFamily.mono],
},
letterSpacing: {
  display:    "-2.4px",   // 48px hero headings
  heading:    "-2.4px",   // 40px section headings
  subheading: "-1.28px",  // 32px sub-headings
  "card-title": "-0.96px", // 24px card titles
  ui:         "-0.32px",  // 16px semibold UI text
},
boxShadow: {
  card:        "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, rgba(0,0,0,0.04) 0px 8px 8px -8px, #fafafa 0px 0px 0px 1px inset",
  "card-hover":"rgba(0,0,0,0.12) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 4px, rgba(0,0,0,0.06) 0px 12px 12px -8px, #fafafa 0px 0px 0px 1px inset",
  border:      "rgba(0,0,0,0.08) 0px 0px 0px 1px",
},
```

### 3. Typography — page.tsx

| Element | Before | After |
|---------|--------|-------|
| Hero name (h1) | `font-bold tracking-tighter` | `font-semibold tracking-display` |
| Section headings | `text-xl font-bold` | `text-[40px] font-semibold tracking-heading leading-tight` |
| Projects heading | `font-bold tracking-tighter sm:text-5xl` | `font-semibold tracking-display sm:text-5xl` |
| Skills category labels | `tracking-wider` | `tracking-normal` |

### 4. Card shadows

**`src/components/project-card.tsx`**
- Replace `border hover:shadow-lg transition-all duration-300 ease-out` with `shadow-card hover:shadow-card-hover transition-shadow duration-300 ease-out`
- Add `font-medium tracking-ui` to `CardTitle` (it is `text-base` = 16px, so `-0.32px` tracking applies, not `-0.96px`)

**`src/components/experience-card.tsx`**
- Add `shadow-card` to the `<Card>` wrapper className

**`src/components/resume-card.tsx`**
- Add `shadow-card` to the `<Card>` wrapper className

### 5. Badges — badge.tsx

**Base classes:**
- `rounded-md` → `rounded-full`
- `font-semibold` → `font-medium`
- `border` → `border-transparent` (already set on most variants, remove from base)

**Secondary variant** (used for tech stack tags in project cards):
- Before: `bg-secondary text-secondary-foreground hover:bg-secondary/80`
- After: `bg-[#ebf5ff] text-[#0068d6] hover:bg-[#dbeeff]`

**Default and outline variants:** unchanged.

## Files Modified

| File | Change |
|------|--------|
| `package.json` | Add `geist` |
| `src/app/layout.tsx` | Swap font imports + className |
| `tailwind.config.ts` | Add fontFamily, letterSpacing, boxShadow tokens |
| `src/app/page.tsx` | Heading weights + tracking tokens, remove tracking-wider |
| `src/components/project-card.tsx` | shadow-card tokens, CardTitle tracking |
| `src/components/experience-card.tsx` | shadow-card on Card |
| `src/components/resume-card.tsx` | shadow-card on Card |
| `src/components/ui/badge.tsx` | rounded-full, font-medium, secondary → blue tint |

## Verification

1. `pnpm dev` — visually inspect:
   - Font renders as Geist (geometric, tight) not Inter (humanist)
   - Hero name has noticeably tighter letter-spacing
   - Section headings are larger (~40px) with tight tracking
   - Project and experience cards have a subtle multi-layer shadow at rest (no harsh border line)
   - Tech stack badges are pill-shaped with blue tint
   - Skills category labels no longer have expanded spacing
2. `pnpm build` — no TypeScript or build errors
3. `pnpm lint` — no lint errors
