# Portfolio Content & Skills Component Update

## Overview

Update the portfolio to accurately reflect Suraj's current role (SDE II), achievements at CultureX, AI expertise, and engineering ambitions. Includes a small component change to support categorized skills.

## Changes

### 1. Hero Section

**File:** `src/data/resume.tsx` — `description` field

**Current:** "Software Development Engineer specializing in Backend & Cloud Architecture"

**New:** "SDE II | Backend Architect | Agentic AI & High-Scale Systems"

---

### 2. About/Summary Section

**File:** `src/data/resume.tsx` — `summary` field

**Current:** Generic 3-year full-stack developer bio.

**New (punchy & metric-driven):**

> "SDE II at an [IIM Ahmedabad](https://www.iima.ac.in/)-funded B2B SaaS startup. Joined at Day 0 — scaled it from a single MVP to 200+ brands processing 50M+ weekly requests. 30+ enterprise database migrations. Zero downtime. Now building Agentic AI workflows with [LangGraph](https://www.langchain.com/langgraph). My goal: bridge the gap between 50 million and 1 billion requests."

---

### 3. Skills Section — Data Structure Change

**File:** `src/data/resume.tsx` — `skills` field

**Current:** Flat `string[]` — `["Express", "Linux", "Nodejs", ...]`

**New:** Object with categories:

```typescript
skills: {
  "Backend": ["Node.js", "Express", "TypeScript", "Go", "Core Java", "Zod"],
  "Cloud & Infra": ["AWS", "AWS Lambda", "SNS", "SQS", "EventBridge", "Docker", "CI/CD", "Linux"],
  "AI/ML": ["LangGraph", "Agentic AI", "LLM Orchestration", "Tool-Calling"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Sequelize"],
  "Observability": ["Prometheus", "Grafana", "Loki", "Winston", "PostHog"],
  "Frontend": ["React", "Next.js", "TailwindCSS"],
  "Tools": ["Git", "GitHub"],
}
```

**Type:** `Record<string, string[]>`

---

### 4. Skills Section — Component Change

**File:** `src/app/page.tsx` — skills section (lines ~55-70)

**Current:** Iterates over `DATA.skills` as a flat array and renders `<Badge>` for each.

**New:** Iterate over `Object.entries(DATA.skills)`. For each category:
- Render category name as a small label (`text-xs font-semibold text-muted-foreground uppercase tracking-wider`)
- Render badges for each skill in that category
- Wrap each category group in a `div` with `flex flex-col gap-y-2`

Layout: categories stacked vertically, badges wrap horizontally within each.

---

### 5. Work Experience

**File:** `src/data/resume.tsx` — `work[0]`

**Changes:**
- `title`: "SDE I" → "SDE II"
- `bullets`: Replace with updated highlights:

```
1. "Scaled the platform from a single MVP to 200+ enterprise brands processing 50M+ weekly requests on AWS (EC2, Lambda, SQS, SNS, EventBridge)."
2. "Architected the Campaign Report engine — tracks and generates reports for 50,000+ posts daily with real-time delivery for 200+ brands."
3. "Led zero-downtime migration of 30+ enterprise database environments into a unified, multi-tenant SaaS architecture."
4. "Reduced client onboarding from days to minutes through automated domain provisioning and UI whitelabeling."
5. "Built event-driven automation systems using AWS EventBridge, SNS/SQS, and Lambda for real-time brand monitoring and cron-based workflows."
6. "Shifted the codebase from JavaScript to Strict TypeScript with Zod validation, eliminating runtime crashes."
7. "Built Agentic AI workflows for No-Touch Negotiation using LangGraph with deterministic tool-calling and LLM orchestration."
8. "Implemented full observability stack with Prometheus, Grafana, and Loki for monitoring and alerting."
```

---

### 6. Education

**File:** `src/data/resume.tsx` — `education`

**Changes:**
- Entry 1 degree: "Bachelor's Degree of Computer Engineering" → "B.Tech in Computer Engineering (GTU)"
- Entry 2 degree: "Diploma in Computer Engineering" → "Diploma in Computer Engineering (GTU)"

---

### 7. Contact/CTA Section

**File:** `src/data/resume.tsx` — `contact.email` and social email URL

- `contact.email`: "jobs@surajkuushwaha.com" → "work@surajkuushwaha.com"
- `contact.social.email.url`: update to `mailto:work@surajkuushwaha.com`

**File:** `src/app/page.tsx` — contact section (lines ~166-191)

- Heading: "Get in Touch" → "Let's build something at scale."
- Subtext: Replace with "I'm always open to discussing high-scale systems, backend architecture, or AI engineering. Drop me an email and let's connect!"

---

### 8. Phone Number Removal

**File:** `src/data/resume.tsx` — `contact.tel`

Remove the phone number field. Portfolio should not expose personal phone number publicly.

---

## Files Modified

| File | Change Type |
|------|-------------|
| `src/data/resume.tsx` | Content updates (description, summary, skills structure, work bullets, education, contact) |
| `src/app/page.tsx` | Skills section component update + contact CTA text |

## What Does NOT Change

- Project structure, routing, layout
- Blog section
- Navbar
- Animations (BlurFade)
- Theme/styling
- All other components (ExperienceCard, ProjectCard, ResumeCard, etc.)
- Projects section (Open Read stays as-is)

## Testing

- `npm run build` — confirm no type errors from skills structure change
- Visual check — verify categorized skills render correctly
- Verify all links work (CultureX, IIM Ahmedabad, LangGraph, email)
