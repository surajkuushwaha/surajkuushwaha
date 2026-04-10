import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
    name: "Suraj Kushwaha",
    initials: "SK",
    url: "https://surajkuushwaha.com",
    location: "Ahmedabad Gujarat, IN",
    locationLink: "https://www.google.com/maps/place/ahmedabad",
    description: "SDE II • Backend Architect • Agentic AI Systems at Scale",
    summary:
        "SDE II at an [IIM Ahmedabad](https://www.iima.ac.in/)-funded B2B SaaS startup. Joined at Day 0, scaled it from a single MVP to 200+ brands processing 50M+ weekly requests. 30+ enterprise database migrations. Zero downtime. Now building Agentic AI workflows with [LangGraph](https://www.langchain.com/langgraph). My goal: bridge the gap between 50 million and 1 billion requests.",
    avatarUrl: "/me.jpg",
    skills: {
        "Backend": ["Node.js", "Express", "TypeScript", "Go", "Core Java", "Zod"],
        "Cloud & Infra": ["AWS", "AWS Lambda", "SNS", "SQS", "EventBridge", "Docker", "CI/CD", "Linux"],
        "AI/ML": ["LangGraph", "Agentic AI", "LLM Orchestration", "Tool-Calling"],
        "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Sequelize"],
        "Observability": ["Prometheus", "Grafana", "Loki", "Winston", "PostHog"],
        "Frontend": ["React", "Next.js", "TailwindCSS"],
        "Tools": ["Git", "GitHub"],
    } as Record<string, string[]>,
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    contact: {
        email: "work@surajkuushwaha.com",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/surajkuushwaha",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/surajkuushwaha/",
                icon: Icons.linkedin,

                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/surajkuushwaha",
                icon: Icons.x,

                navbar: true,
            },
            // Youtube: {
            //     name: "Youtube",
            //     url: "https://dub.sh/dillion-youtube",
            //     icon: Icons.youtube,
            //     navbar: true,
            // },
            email: {
                name: "Send Email",
                url: "mailto:work@surajkuushwaha.com",
                icon: Icons.email,

                navbar: true,
            },
        },
    },

    work: [
        {
            company: "CultureX Entertainment Private Limited",
            href: "https://www.culturex.ai",
            badges: [],
            location: "Hybrid",
            title: "SDE II",
            logoUrl: "/culturex.png",
            start: "Jul 2022",
            end: "Present",
            bullets: [
                "Scaled the platform from a single MVP to 200+ enterprise brands processing 50M+ weekly requests on AWS (EC2, Lambda, SQS, SNS, EventBridge).",
                "Architected the Campaign Report engine that tracks and generates reports for 50,000+ posts daily with real-time delivery for 200+ brands.",
                "Led zero-downtime migration of 30+ enterprise database environments into a unified, multi-tenant SaaS architecture.",
                "Reduced client onboarding from days to minutes through automated domain provisioning and UI whitelabeling.",
                "Built event-driven automation systems using AWS EventBridge, SNS/SQS, and Lambda for real-time brand monitoring and cron-based workflows.",
                "Shifted the codebase from JavaScript to Strict TypeScript with Zod validation, eliminating runtime crashes.",
                "Built Agentic AI workflows for No-Touch Negotiation using LangGraph with deterministic tool-calling and LLM orchestration.",
                "Implemented full observability stack with Prometheus, Grafana, and Loki for monitoring and alerting.",
            ],
        },
    ] as Array<{
        company: string;
        href: string;
        badges?: string[];
        location?: string;
        title: string;
        logoUrl: string;
        start: string;
        end?: string | null;
        description?: string;
        bullets?: string[];
    }>,
    education: [
        {
            school: "Government Engineering College, Modasa",
            href: "https://www.gecmodasa.ac.in/",
            degree: "B.Tech in Computer Engineering (GTU)",
            logoUrl: "/gec_modasa.png",
            start: "2020",
            end: "2023",
        },
        {
            school: "Ranchhodlal Chhotalal Technical Institute",
            href: null,
            degree: "Diploma in Computer Engineering (GTU)",
            logoUrl: "/rc_technical.png",
            start: "2017",
            end: "2020",
        },
    ],
    projects: [
        {
            title: "Open Read",
            href: "https://github.com/surajkuushwaha/open-read",
            dates: "Jan 2025 - Feb 2025",
            active: true,
            description:
                "Open Read is a powerful Chrome extension designed to enhance your browsing experience by allowing you to access and read articles and blogs across the web without the hassle of signing up or logging in.",
            technologies: ["TypeScript", "plasmo", "React", "HTML/CSS"],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/surajkuushwaha/open-read",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/open-read.png",
            video: "",
        },
        // {
        //     title: "My knowledge base",
        //     href: "https://magicui.design",
        //     dates: "June 2023 - Present",
        //     active: true,
        //     description:
        //         "Designed, developed and sold animated UI components for developers.",
        //     technologies: [
        //         "Next.js",
        //         "Typescript",
        //         "PostgreSQL",
        //         "Prisma",
        //         "TailwindCSS",
        //         "Stripe",
        //         "Shadcn UI",
        //         "Magic UI",
        //     ],
        //     links: [
        //         {
        //             type: "Website",
        //             href: "https://magicui.design",
        //             icon: <Icons.globe className="size-3" />,
        //         },
        //         {
        //             type: "Source",
        //             href: "https://github.com/magicuidesign/magicui",
        //             icon: <Icons.github className="size-3" />,
        //         },
        //     ],
        //     image: "",
        //     video: "https://cdn.magicui.design/bento-grid.mp4",
        // },
        // {
        //     title: "llm.report",
        //     href: "https://llm.report",
        //     dates: "April 2023 - September 2023",
        //     active: true,
        //     description:
        //         "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
        //     technologies: [
        //         "Next.js",
        //         "Typescript",
        //         "PostgreSQL",
        //         "Prisma",
        //         "TailwindCSS",
        //         "Shadcn UI",
        //         "Magic UI",
        //         "Stripe",
        //         "Cloudflare Workers",
        //     ],
        //     links: [
        //         {
        //             type: "Website",
        //             href: "https://llm.report",
        //             icon: <Icons.globe className="size-3" />,
        //         },
        //         {
        //             type: "Source",
        //             href: "https://github.com/dillionverma/llm.report",
        //             icon: <Icons.github className="size-3" />,
        //         },
        //     ],
        //     image: "",
        //     video: "https://cdn.llm.report/openai-demo.mp4",
        // },
        // {
        //     title: "Automatic Chat",
        //     href: "https://automatic.chat",
        //     dates: "April 2023 - March 2024",
        //     active: true,
        //     description:
        //         "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
        //     technologies: [
        //         "Next.js",
        //         "Typescript",
        //         "PostgreSQL",
        //         "Prisma",
        //         "TailwindCSS",
        //         "Shadcn UI",
        //         "Magic UI",
        //         "Stripe",
        //         "Cloudflare Workers",
        //     ],
        //     links: [
        //         {
        //             type: "Website",
        //             href: "https://automatic.chat",
        //             icon: <Icons.globe className="size-3" />,
        //         },
        //     ],
        //     image: "",
        //     video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
        // },
    ],
};
