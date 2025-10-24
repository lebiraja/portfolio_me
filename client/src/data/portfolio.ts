import type { Project, Experience, TechCategory } from "@shared/schema";

export const projects: Project[] = [
  {
    id: "studymate-ai",
    name: "StudyMateAI",
    tagline: "Smart Study Assistant with Auto-RAG",
    description: "An intelligent study companion that seamlessly integrates Google Classroom and Drive APIs with an advanced Auto-RAG system. Automatically solves assignments by retrieving relevant context from your study materials and generating accurate solutions.",
    techStack: ["Python", "Google APIs", "RAG", "LLMs", "ChromaDB"],
    githubUrl: "https://github.com/Lebi-Raja",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "careerwise-ai",
    name: "CareerWise AI",
    tagline: "Intelligent Career Mentor",
    description: "An AI-powered career guidance platform that analyzes resumes and GitHub profiles using advanced LLMs. Provides personalized career recommendations, skill gap analysis, and actionable insights to help you achieve your professional goals.",
    techStack: ["Python", "LLMs", "NLP", "GitHub API", "FastAPI"],
    githubUrl: "https://github.com/Lebi-Raja",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "data-boy",
    name: "Data-Boy",
    tagline: "Dataset Cleaning Telegram Bot",
    description: "A powerful Telegram bot that revolutionizes data preprocessing. Leverages local LLMs through Ollama to intelligently clean and validate datasets, handling missing values, outliers, and data quality issues with conversational ease.",
    techStack: ["Python", "Ollama", "Telegram Bot API", "Pandas", "NLTK"],
    githubUrl: "https://github.com/Lebi-Raja",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: "gesture-control",
    name: "Gesture Control System",
    tagline: "Real-time Gesture-based PC Control",
    description: "An innovative computer vision system that transforms hand gestures into PC commands. Built with OpenCV and MediaPipe for real-time hand tracking, combined with PyAutoGUI for seamless system automation and control.",
    techStack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "Computer Vision"],
    githubUrl: "https://github.com/Lebi-Raja",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: "herdays",
    name: "HerDays",
    tagline: "Thoughtful Period Tracking App",
    description: "A beautifully designed, flower-themed mobile application for period tracking. Features mood tracking, smart reminders, and shared notes. Built with care as a personal gift, focusing on privacy, comfort, and emotional well-being.",
    techStack: ["React", "Firebase", "Mobile", "UI/UX Design"],
    githubUrl: "https://github.com/Lebi-Raja",
    gradient: "from-pink-500 to-rose-500"
  }
];

export const experiences: Experience[] = [
  {
    id: "karunya-university",
    title: "AI & Data Science Student",
    organization: "Karunya University",
    period: "2024 - Present",
    description: "Working on advanced projects in LLMs, multimodal RAG systems, and intelligent automation. Developing expertise in machine learning, deep learning, and data-driven solutions."
  },
  {
    id: "independent-developer",
    title: "Independent AI Developer",
    organization: "Freelance",
    period: "2023 - Present",
    description: "Building innovative tools integrating local LLMs, APIs, and real-time data processing. Specializing in creating intelligent systems that solve real-world problems."
  }
];

export const techStack: TechCategory[] = [
  {
    category: "Languages",
    technologies: ["Python", "Java", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Frameworks & Tools",
    technologies: ["Streamlit", "Flask", "React", "FastAPI", "OpenCV", "MediaPipe", "PyAutoGUI"]
  },
  {
    category: "AI/ML Tools",
    technologies: ["TensorFlow", "PyTorch", "NLTK", "Scikit-learn", "Ollama", "ChromaDB"]
  },
  {
    category: "Databases",
    technologies: ["MySQL", "MongoDB", "Firebase"]
  },
  {
    category: "Other Skills",
    technologies: ["REST APIs", "Data Cleaning", "RAG Pipelines", "Google APIs", "Computer Vision", "Prompt Engineering"]
  }
];

export const socialLinks = {
  github: "https://github.com/Lebi-Raja",
  linkedin: "https://linkedin.com/in/lebi-raja",
  email: "lebiraja2007@gmail.com",
  phone: "8489195917",
  whatsapp: "8489195917",
  instagram: "https://instagram.com/lebi_raja_07",
  snapchat: "lebiraja2007"
};

export const personalInfo = {
  name: "LEBI RAJA ",
  preferredName: "Lebi",
  role: "AI & Data Science Engineer",
  location: "Coimbatore, India",
  bio: "Passionate about building intelligent systems that bridge human creativity and machine reasoning. I specialize in LLM applications, computer vision, and data-driven automation. I love anime, solo travel, and innovation that inspires human connection."
};
