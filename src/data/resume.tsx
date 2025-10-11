import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
    name: "Suraj Kushwaha",
    initials: "SK",
    url: "https://surajkuushwaha.com",
    location: "Ahmedabad Gujarat, IN",
    locationLink: "https://www.google.com/maps/place/ahmedabad",
    description:
        "Software Developer Engineer",
    summary:
        "I’m a Full Stack Developer with 3 years of experience building scalable web applications at [CultureX](https://www.influenzer.io/). With a background in Computer Engineering (Diploma + B.Tech), I blend solid technical skills with a deep passion for tech. I enjoy working across the stack—using tools like Node.js, React, Express and Docker—and love creating solutions that have real-world impact.",
    avatarUrl: "/me.jpg",
    skills: [
        "Express",
        "Linux",
        "Nodejs",
        "MySql",
        "Sequelize",
        "MongoDB",
        "Typescript",
        "React",
        "Next.js",
        "Postgres",
        "Docker",
        "Posthog",
        "Winston",
        "Git",
        "GitHub",
        "PostgreSQL",
        "TailwindCSS",
        "CI/CD",
        // "Kubernetes",
        "Core Java",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    contact: {
        email: "surajkushwaha@gmail.com",
        tel: "+91 91067 64917",
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
                url: "mailto:surajkuushwaha@gmail.com",
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
            title: "SDE I",
            logoUrl: "/culturex.png",
            start: "Jul 2022",
            end: "Present",
            bullets: [
                "Architected and scaled backend microservices on AWS (EC2, SQS, Lambda), handling over 5 million requests per month to power B2B SaaS products for 100+ global brands.",
                "Led a strategic migration from a siloed, multi-database architecture to a unified SaaS model, designing and executing a zero-downtime migration for 30+ legacy clients.",
                "Owned the end-to-end development of a public-facing microservice, transforming an internal tool into a sellable API product and managing its full lifecycle from design to maintenance.",
                "Developed and launched 10+ MVPs from the ground up, securing the company's first client and establishing the core foundation of influencer marketing platform.",
                "Contributed as a core backend developer using Node.js, TypeScript, and MySQL, driving architectural decisions and overseeing the full development lifecycle from design to deployment.",
                "Engineered event-driven social listening automation leveraging AWS EventBridge schedulers, SNS/SQS message queues, and worker services with idempotent batch processing for real-time brand mention tracking.",
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
            degree: "Bachelor's Degree of Computer Engineering",
            logoUrl: "/gec_modasa.png",
            start: "2020",
            end: "2023",
        },
        {
            school: "Ranchhodlal Chhotalal Technical Institute",
            href: null,
            degree: "Diploma in Computer Engineering",
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
            technologies: ["Javascript", "HTML/CSS"],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/surajkuushwaha/open-read",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
        },
        {
            title: "My knowledge base",
            href: "https://magicui.design",
            dates: "June 2023 - Present",
            active: true,
            description:
                "Designed, developed and sold animated UI components for developers.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Stripe",
                "Shadcn UI",
                "Magic UI",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://magicui.design",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/magicuidesign/magicui",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://cdn.magicui.design/bento-grid.mp4",
        },
        {
            title: "llm.report",
            href: "https://llm.report",
            dates: "April 2023 - September 2023",
            active: true,
            description:
                "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Magic UI",
                "Stripe",
                "Cloudflare Workers",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://llm.report",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/dillionverma/llm.report",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://cdn.llm.report/openai-demo.mp4",
        },
        {
            title: "Automatic Chat",
            href: "https://automatic.chat",
            dates: "April 2023 - March 2024",
            active: true,
            description:
                "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Magic UI",
                "Stripe",
                "Cloudflare Workers",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://automatic.chat",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
        },
    ],
} as const;
