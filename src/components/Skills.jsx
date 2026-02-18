import React from 'react';
import './Skills.css';

const Skills = () => {
  // Skill icon mapping using CDN URLs for logos
  const skillIcons = {
    // Languages
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'SQL': 'https://img.icons8.com/color/48/sql.png',
    'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',

    // ML Frameworks
    'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'Hugging Face': 'https://huggingface.co/front/assets/huggingface_logo.png',
    'LangChain': 'https://img.icons8.com/color/48/python.png',
    'Ollama': 'https://img.icons8.com/fluency/48/artificial-intelligence.png',
    'PEFT': 'https://img.icons8.com/fluency/48/brain.png',
    'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',

    // AI & LLM Specializations
    'LLMs': 'https://img.icons8.com/fluency/48/chatgpt.png',
    'RAG Architecture': 'https://img.icons8.com/fluency/48/database.png',
    'LoRA Fine-Tuning': 'https://img.icons8.com/fluency/48/settings.png',
    'Prompt Engineering': 'https://img.icons8.com/fluency/48/code.png',
    'Embeddings': 'https://img.icons8.com/fluency/48/neural-network.png',
    'Vector Databases': 'https://img.icons8.com/fluency/48/database.png',

    // Computer Vision
    'OpenCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    'MediaPipe': 'https://img.icons8.com/fluency/48/settings.png',
    'CNN': 'https://img.icons8.com/fluency/48/brain.png',

    // Data & Analytics
    'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    'Matplotlib': 'https://img.icons8.com/fluency/48/graph.png',
    'Seaborn': 'https://img.icons8.com/fluency/48/graph.png',

    // Web & Backend
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    'Streamlit': 'https://img.icons8.com/color/48/python.png',
    'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',

    // Databases
    'ChromaDB': 'https://img.icons8.com/fluency/48/database.png',
    'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',

    // DevOps & Cloud
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'GitHub': 'https://img.icons8.com/color/48/github.png',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'GitHub Actions': 'https://img.icons8.com/color/48/github.png',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',

    // APIs & Tools
    'REST APIs': 'https://img.icons8.com/fluency/48/code.png',
    'Telegram Bot API': 'https://img.icons8.com/color/48/telegram.png',
    'Google APIs': 'https://img.icons8.com/color/48/google.png',
    'PyMuPDF': 'https://img.icons8.com/color/48/pdf.png',
    'GNOME Shell': 'https://img.icons8.com/color/48/linux.png'
  };

  const skillCategories = [
    {
      category: 'Programming Languages',
      items: ['Python', 'Java', 'JavaScript', 'SQL', 'C', 'C++'],
      color: '#3b82f6'
    },
    {
      category: 'ML Frameworks',
      items: ['PyTorch', 'Hugging Face', 'LangChain', 'Ollama', 'PEFT', 'Scikit-learn', 'TensorFlow'],
      color: '#8b5cf6'
    },
    {
      category: 'AI & LLM Specializations',
      items: ['LLMs', 'RAG Architecture', 'LoRA Fine-Tuning', 'Prompt Engineering', 'Embeddings', 'Vector Databases'],
      color: '#10b981'
    },
    {
      category: 'Computer Vision',
      items: ['OpenCV', 'MediaPipe', 'CNN'],
      color: '#f59e0b'
    },
    {
      category: 'Data & Analytics',
      items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      color: '#ec4899'
    },
    {
      category: 'Web & Backend',
      items: ['React', 'TypeScript', 'FastAPI', 'Streamlit', 'Flask', 'Node.js'],
      color: '#06b6d4'
    },
    {
      category: 'Databases & Vector Storage',
      items: ['ChromaDB', 'SQLite', 'PostgreSQL', 'MongoDB'],
      color: '#14b8a6'
    },
    {
      category: 'DevOps & Cloud',
      items: ['Git', 'GitHub', 'Docker', 'GitHub Actions', 'AWS', 'Linux'],
      color: '#ef4444'
    },
    {
      category: 'APIs & Tools',
      items: ['REST APIs', 'Telegram Bot API', 'Google APIs', 'PyMuPDF', 'GNOME Shell'],
      color: '#f97316'
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">
          Skills & Technologies
          <span className="title-underline"></span>
        </h2>
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category" style={{ '--delay': `${index * 0.1}s` }}>
              <h3 className="category-title" style={{ color: category.color }}>
                {category.category}
              </h3>
              <div className="category-items">
                {category.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-tag"
                    style={{ 
                      '--item-delay': `${skillIndex * 0.05}s`,
                      borderColor: category.color + '40',
                      color: category.color
                    }}
                  >
                    {skillIcons[skill] && (
                      <img 
                        src={skillIcons[skill]} 
                        alt={skill}
                        className="skill-icon"
                      />
                    )}
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
