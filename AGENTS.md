# Agent Guidelines

## Build/Lint/Test Commands
- **Dev**: `npm run dev` (uses turbopack)
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **No test suite configured**

## Code Style
- **Imports**: Use `@/*` path alias for src imports (e.g., `@/components/ui/button`)
- **Formatting**: Double quotes, 4-space tabs, semicolons, ES5 trailing commas (see .prettierrc)
- **TypeScript**: Strict mode enabled, use explicit types for props/interfaces
- **Naming**: PascalCase for components, camelCase for functions/variables, SCREAMING_SNAKE_CASE for constants
- **Components**: Use "use client" directive for client components with interactivity/hooks
- **Styling**: Tailwind classes, use `cn()` from `@/lib/utils` for conditional classes
- **Error Handling**: Use optional chaining and null checks where appropriate

## Framework & Dependencies
- Next.js 15 (App Router), React 19, TypeScript 5
- UI: Radix UI, Tailwind CSS, Framer Motion, shadcn/ui components
- No comments unless explicitly requested
