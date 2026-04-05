# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev**: `pnpm dev` (Next.js with Turbopack)
- **Build**: `pnpm build`
- **Lint**: `pnpm lint`
- **No test suite configured**

## Architecture

**Stack:** Next.js 15 (App Router), React 19, TypeScript 5, Tailwind CSS 3, shadcn/ui, Framer Motion

**Single source of truth for content:** `src/data/resume.tsx` — the `DATA` object drives all portfolio sections (work, education, projects, skills, contact, navbar links). Update this file to change any portfolio content.

**Blog:** File-based MDX in `/content/`. Posts are loaded via `src/data/blog.ts` using gray-matter for frontmatter. Rendered with unified/rehype pipeline and shiki syntax highlighting (themes: "min-light"/"min-dark").

**Animations:** `BlurFade` and `BlurFadeText` components (from `src/components/magicui/`) handle staggered section reveals. The home page uses a `BLUR_FADE_DELAY = 0.04` constant to sequence them.

**Navigation:** Fixed bottom dock navbar (`src/components/navbar.tsx`). Social links in `DATA.contact.social` appear in the dock when `navbar: true`.

**Theming:** Class-based dark mode (`next-themes`). All colors are HSL CSS variables in `src/app/globals.css`. See `DESIGN.md` for the full design system (Vercel-inspired minimalist: achromatic palette, shadow-as-border technique, 8px spacing unit).

## Code Style

- **Imports**: Use `@/*` path alias (e.g., `@/components/ui/button`)
- **Formatting**: Double quotes, 4-space tabs, semicolons, ES5 trailing commas (`.prettierrc`)
- **TypeScript**: Strict mode — use explicit types for props/interfaces
- **Naming**: PascalCase for components, camelCase for functions/variables, SCREAMING_SNAKE_CASE for constants
- **Components**: Add `"use client"` directive only for components using hooks or browser APIs
- **Styling**: Tailwind classes + `cn()` from `@/lib/utils` for conditional combining
- **No comments** unless explicitly requested

## shadcn/ui & MagicUI

- shadcn components live in `src/components/ui/` (style: "new-york", base color: "neutral")
- MagicUI components live in `src/components/magicui/`
- Add new shadcn components with `pnpm dlx shadcn@latest add <component>`
