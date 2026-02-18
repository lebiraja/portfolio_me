import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'ClarityMentor — Fine-Tuned Philosophical AI Mentor',
      description: 'Fine-tuned a LoRA adapter on Qwen2.5-1.5B-Instruct to provide thoughtful philosophical mentorship and balanced life-guidance responses. Applied 4-bit quantization with Supervised Fine-Tuning (SFT) to optimize model performance on constrained hardware. Publicly published on Hugging Face Hub.',
      technologies: ['Qwen2.5', 'LoRA', 'PEFT', 'PyTorch', 'Hugging Face', 'BitsAndBytes', 'SFT'],
      image: '/ClarityMentor.jpg',
      github: 'https://github.com/lebiraja/ClarityMentor',
      demo: 'https://huggingface.co/lebiraja'
    },
    {
      title: 'Dictator — Offline Voice-to-Text Desktop Utility',
      description: 'GNOME Linux desktop utility that captures voice and types transcribed text directly into any active application via keyboard shortcut. Integrates OpenAI Whisper for fully local, privacy-preserving speech-to-text with optional GPU acceleration via CUDA.',
      technologies: ['Python', 'Whisper', 'GNOME Shell', 'JavaScript/CSS', 'CUDA', 'PipeWire'],
      image: '/Dictator.jpg',
      github: 'https://github.com/lebiraja/Dictator',
      demo: '#'
    },
    {
      title: 'Linux Voice Assistant',
      description: 'Fully local Linux voice assistant for opening apps, running web searches, and controlling system functions via natural speech. Minimizes cloud dependency using on-device Whisper recognition and subprocess-based OS command execution.',
      technologies: ['Python', 'Whisper', 'SpeechRecognition', 'PyAudio', 'TTS Engine'],
      image: '/VoiceAssistant.jpg',
      github: 'https://github.com/lebiraja/Linux-Voice-Assistant',
      demo: '#'
    },
    {
      title: 'Plugin — Modular LLM Plugin Framework',
      description: 'Flexible framework to extend LLM capabilities by dynamically loading and executing user-defined custom plugins. Enables models to connect to external APIs, perform domain-specific tasks, and process structured data beyond plain text generation.',
      technologies: ['Python', 'LLM Integration', 'Plugin Architecture', 'API Modules'],
      image: '/Plugin.jpg',
      github: 'https://github.com/lebiraja/Plugin',
      demo: '#'
    },
    {
      title: 'DataBoy — AI-Powered Telegram Data Cleaning Bot',
      description: 'Telegram bot that accepts messy CSV/Excel uploads and returns cleaned, validated datasets using LLM-powered analysis. Implements intelligent handling of missing values, formatting inconsistencies, and data standardization via Pandas + Ollama. Eliminates the need for coding with conversational interface.',
      technologies: ['Python', 'Telegram Bot API', 'Pandas', 'NumPy', 'Ollama', 'Streamlit'],
      image: '/DataBoy.jpg',
      github: 'https://github.com/lebiraja/DATA_BOT_TELEGRAM',
      demo: '#'
    },
    {
      title: 'PLUGIN - Local LLM Chat Interface',
      description: 'Feature-rich chat application for interacting with local LLMs like Ollama and LM Studio with privacy, RAG support, and document Q&A. Blends React + TypeScript UI with FastAPI backend, enabling conversation memory, web search, file uploads, and vector retrieval.',
      technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'Ollama', 'RAG', 'ChromaDB'],
      image: '/plugin.jpg',
      github: 'https://github.com/lebiraja/plugin',
      demo: '#'
    },
    {
      title: 'StudyMateAI',
      description: 'Advanced learning companion integrating Google Classroom and Drive APIs to automatically analyze assignments, retrieve materials, and generate intelligent responses using local LLM. Features RAG pipeline with ChromaDB for context-aware answers.',
      technologies: ['Python', 'Streamlit', 'Google API', 'LLM', 'ChromaDB', 'RAG'],
      image: '/studymate.jpg',
      github: 'https://github.com/lebiraja/StudyMateAI',
      demo: '#'
    },
    {
      title: 'CareerWise AI',
      description: 'Intelligent career mentor that analyzes user resumes and GitHub profiles to provide personalized career recommendations. Powered by LangChain and Ollama for deep insights into skills, projects, and career trajectory.',
      technologies: ['Python', 'Flask', 'Ollama', 'LangChain', 'NLP'],
      image: '/CareerWise.jpeg',
      github: 'https://github.com/lebiraja',
      demo: 'https://careerwise.lebiraja.tech/'
    },
    {
      title: 'Hand Gesture Control System',
      description: 'Real-time gesture-based control system with adaptive sensitivity and app-specific profiles. Merges OpenCV, MediaPipe, and PyAutoGUI for intuitive human-computer interaction, enabling hands-free control of applications.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI', 'Computer Vision'],
      image: '/Hand Gesture Control System.jpg',
      github: 'https://github.com/lebiraja/HandGestureControl',
      demo: '#'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">GitHub</a>
                  <a href={project.demo} className="project-link">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
