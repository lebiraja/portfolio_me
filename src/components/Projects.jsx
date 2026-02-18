import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'ClarityMentor — Fine-Tuned Philosophical AI Mentor',
      description: 'Fine-tuned a LoRA adapter on Qwen2.5-1.5B-Instruct to provide thoughtful philosophical mentorship and balanced life-guidance responses. Applied 4-bit quantization with Supervised Fine-Tuning (SFT) to optimize model performance on constrained hardware. Publicly published on Hugging Face Hub.',
      technologies: ['Qwen2.5', 'LoRA', 'PEFT', 'PyTorch', 'Hugging Face', 'BitsAndBytes', 'SFT'],
      github: 'https://github.com/lebiraja/ClarityMentor',
      huggingface: 'https://huggingface.co/lebiraja'
    },
    {
      title: 'Dictator — Offline Voice-to-Text Desktop Utility',
      description: 'GNOME Linux desktop utility that captures voice and types transcribed text directly into any active application via keyboard shortcut. Integrates OpenAI Whisper for fully local, privacy-preserving speech-to-text with optional GPU acceleration via CUDA.',
      technologies: ['Python', 'Whisper', 'GNOME Shell', 'JavaScript/CSS', 'CUDA', 'PipeWire'],
      github: 'https://github.com/lebiraja/Dictator'
    },
    {
      title: 'Linux Voice Assistant',
      description: 'Fully local Linux voice assistant for opening apps, running web searches, and controlling system functions via natural speech. Minimizes cloud dependency using on-device Whisper recognition and subprocess-based OS command execution.',
      technologies: ['Python', 'Whisper', 'SpeechRecognition', 'PyAudio', 'TTS Engine'],
      github: 'https://github.com/lebiraja/Linux-Voice-Assistant'
    },
    {
      title: 'Plugin — Modular LLM Plugin Framework',
      description: 'Flexible framework to extend LLM capabilities by dynamically loading and executing user-defined custom plugins. Enables models to connect to external APIs, perform domain-specific tasks, and process structured data beyond plain text generation.',
      technologies: ['Python', 'LLM Integration', 'Plugin Architecture', 'API Modules'],
      github: 'https://github.com/lebiraja/Plugin'
    },
    {
      title: 'DataBoy — AI-Powered Telegram Data Cleaning Bot',
      description: 'Telegram bot that accepts messy CSV/Excel uploads and returns cleaned, validated datasets using LLM-powered analysis. Implements intelligent handling of missing values, formatting inconsistencies, and data standardization via Pandas + Ollama. Eliminates the need for coding with conversational interface.',
      technologies: ['Python', 'Telegram Bot API', 'Pandas', 'NumPy', 'Ollama', 'Streamlit'],
      github: 'https://github.com/lebiraja/DATA_BOT_TELEGRAM'
    },
    {
      title: 'PLUGIN - Local LLM Chat Interface',
      description: 'Feature-rich chat application for interacting with local LLMs like Ollama and LM Studio with privacy, RAG support, and document Q&A. Blends React + TypeScript UI with FastAPI backend, enabling conversation memory, web search, file uploads, and vector retrieval.',
      technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'Ollama', 'RAG', 'ChromaDB'],
      github: 'https://github.com/lebiraja/plugin'
    },
    {
      title: 'StudyMateAI',
      description: 'Advanced learning companion integrating Google Classroom and Drive APIs to automatically analyze assignments, retrieve materials, and generate intelligent responses using local LLM. Features RAG pipeline with ChromaDB for context-aware answers.',
      technologies: ['Python', 'Streamlit', 'Google API', 'LLM', 'ChromaDB', 'RAG'],
      github: 'https://github.com/lebiraja/StudyMateAI'
    },
    {
      title: 'CareerWise AI',
      description: 'Intelligent career mentor that analyzes user resumes and GitHub profiles to provide personalized career recommendations. Powered by LangChain and Ollama for deep insights into skills, projects, and career trajectory.',
      technologies: ['Python', 'Flask', 'Ollama', 'LangChain', 'NLP'],
      github: 'https://github.com/lebiraja/CareerWise'
    },
    {
      title: 'Hand Gesture Control System',
      description: 'Real-time gesture-based control system with adaptive sensitivity and app-specific profiles. Merges OpenCV, MediaPipe, and PyAutoGUI for intuitive human-computer interaction, enabling hands-free control of applications.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI', 'Computer Vision'],
      github: 'https://github.com/lebiraja/HandGestureControl'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
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
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  {project.huggingface && (
                    <a href={project.huggingface} target="_blank" rel="noopener noreferrer" className="project-link huggingface-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/>
                        <path d="M12 5c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                      </svg>
                      HuggingFace
                    </a>
                  )}
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
