/**
 * SEO Configuration and Structured Data Schemas
 * Following schema.org standards for better search engine understanding
 */

export const siteMetadata = {
    siteUrl: 'https://lebiraja.com',
    siteName: 'Lebi Raja - AI & Data Science Engineer',
    author: 'Lebi Raja',
    description: 'Portfolio of Lebi Raja, an AI & Data Science engineer developing intelligent systems and innovative automation tools that redefine user interaction and productivity.',
    keywords: 'AI engineer, Data scientist, Machine learning, Computer vision, React developer, Python, Portfolio, Streamlit, Ollama, Karunya University, Artificial Intelligence',
    image: '/og-image.png',
    twitterHandle: '@lebiraja'
};

// Person Schema - Represents Lebi Raja
export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lebi Raja",
    "url": "https://lebiraja.com",
    "image": "https://lebiraja.com/profile.jpg",
    "jobTitle": "AI & Data Science Engineer",
    "worksFor": {
        "@type": "EducationalOrganization",
        "name": "Karunya University"
    },
    "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Karunya University"
    },
    "description": "Artificial Intelligence and Data Science engineering student passionate about building intelligent systems that merge innovation with real-world utility.",
    "knowsAbout": [
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
        "Computer Vision",
        "Natural Language Processing",
        "Python",
        "React",
        "FastAPI",
        "LLM Development"
    ],
    "sameAs": [
        "https://github.com/lebiraja",
        "https://linkedin.com/in/lebiraja"
    ]
};

// WebSite Schema - Represents the portfolio website
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Lebi Raja Portfolio",
    "url": "https://lebiraja.com",
    "description": "Portfolio showcasing AI and Data Science projects, skills, and experience",
    "author": {
        "@type": "Person",
        "name": "Lebi Raja"
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://lebiraja.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};

// Project Schemas - CreativeWork for each project
export const projectSchemas = [
    {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "PLUGIN - Local LLM Chat Interface",
        "description": "A modern, feature-rich chat application for interacting with local large language models (LLMs) like Ollama and LM Studio with privacy, RAG support, and document Q&A.",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Cross-platform",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "author": {
            "@type": "Person",
            "name": "Lebi Raja"
        },
        "programmingLanguage": ["React", "TypeScript", "Python", "FastAPI"],
        "codeRepository": "https://github.com/lebiraja/plugin",
        "screenshot": "https://lebiraja.com/plugin.jpg"
    },
    {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "StudyMateAI",
        "description": "An advanced learning companion that integrates Google Classroom and Drive APIs to automatically analyze assignments, retrieve materials, and generate intelligent responses using a local LLM.",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Cross-platform",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "author": {
            "@type": "Person",
            "name": "Lebi Raja"
        },
        "programmingLanguage": ["Python", "Streamlit"],
        "codeRepository": "https://github.com/lebiraja/StudyMateAI",
        "screenshot": "https://lebiraja.com/studymate.jpg"
    },
    {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "CareerWise AI",
        "description": "An intelligent career mentor that analyzes user resumes and GitHub profiles to provide personalized career recommendations powered by LangChain and Ollama.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "author": {
            "@type": "Person",
            "name": "Lebi Raja"
        },
        "programmingLanguage": ["Python", "Flask"],
        "url": "https://careerwise.lebiraja.tech/",
        "screenshot": "https://lebiraja.com/CareerWise.jpeg"
    },
    {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Hand Gesture Control System",
        "description": "A real-time gesture-based control system with adaptive sensitivity and app-specific profiles, enabling hands-free control of applications using computer vision.",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Cross-platform",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "author": {
            "@type": "Person",
            "name": "Lebi Raja"
        },
        "programmingLanguage": ["Python"],
        "codeRepository": "https://github.com/lebiraja/HandGestureControl",
        "screenshot": "https://lebiraja.com/Hand Gesture Control System.jpg"
    },
    {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Data-Boy Bot",
        "description": "A Telegram bot that uses local LLMs to clean, validate, and summarize datasets uploaded by users, making data analysis accessible to everyone.",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "author": {
            "@type": "Person",
            "name": "Lebi Raja"
        },
        "programmingLanguage": ["Python"],
        "codeRepository": "https://github.com/lebiraja/DATA_BOT_TELEGRAM",
        "screenshot": "https://lebiraja.com/Data-Boy Bot.jpeg"
    }
];

// BreadcrumbList Schema - For navigation
export const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://lebiraja.com/"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://lebiraja.com/#about"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Skills",
            "item": "https://lebiraja.com/#skills"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "Experience",
            "item": "https://lebiraja.com/#experience"
        },
        {
            "@type": "ListItem",
            "position": 5,
            "name": "Projects",
            "item": "https://lebiraja.com/#projects"
        },
        {
            "@type": "ListItem",
            "position": 6,
            "name": "Contact",
            "item": "https://lebiraja.com/#contact"
        }
    ]
};
