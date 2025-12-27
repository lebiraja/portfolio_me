import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'PLUGIN - Local LLM Chat Interface',
      description: 'A modern, feature-rich chat application for interacting with local large language models (LLMs) like Ollama and LM Studio with privacy, RAG support, and document Q&A. It blends a polished React + TypeScript UI with a powerful FastAPI backend, enabling conversation memory, web search, file uploads, and vector retrieval. Everything runs locally for user privacy and performance.',
      technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'Ollama', 'RAG', 'ChromaDB'],
      image: '/plugin.jpg',
      github: 'https://github.com/lebiraja/plugin',
      demo: '#'
    },
    {
      title: 'StudyMateAI',
      description: 'An advanced learning companion that integrates Google Classroom and Drive APIs to automatically analyze assignments, retrieve materials, and generate intelligent responses using a local LLM. Features RAG pipeline with ChromaDB for context-aware answers.',
      technologies: ['Python', 'Streamlit', 'Google API', 'LLM', 'ChromaDB'],
      image: '/studymate.jpg',
      github: 'https://github.com/lebiraja/StudyMateAI',
      demo: '#'
    },
    {
      title: 'CareerWise AI',
      description: 'An intelligent career mentor that analyzes user resumes and GitHub profiles to provide personalized career recommendations. Powered by LangChain and Ollama for deep insights into skills, projects, and career trajectory.',
      technologies: ['Python', 'Flask', 'Ollama', 'LangChain', 'NLP'],
      image: '/CareerWise.jpeg',
      github: 'https://github.com/lebiraja',
      demo: 'https://careerwise.lebiraja.tech/'
    },
    {
      title: 'Hand Gesture Control System',
      description: 'A real-time gesture-based control system with adaptive sensitivity and app-specific profiles. Merges OpenCV, MediaPipe, and PyAutoGUI for intuitive human-computer interaction, enabling hands-free control of applications.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
      image: '/Hand Gesture Control System.jpg',
      github: 'https://github.com/lebiraja/HandGestureControl',
      demo: '#'
    },
    {
      title: 'Data-Boy Bot',
      description: 'A Telegram bot that uses local LLMs to clean, validate, and summarize datasets uploaded by users. Automates data preprocessing tasks and provides intelligent insights, making data analysis accessible to everyone.',
      technologies: ['Python', 'Telegram API', 'LLM', 'Pandas'],
      image: '/Data-Boy Bot.jpeg',
      github: 'https://github.com/lebiraja/DATA_BOT_TELEGRAM',
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
