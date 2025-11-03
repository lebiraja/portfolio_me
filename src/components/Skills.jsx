import React from 'react';
import './Skills.css';

const Skills = () => {
  // Skill icon mapping using CDN URLs for logos
  const skillIcons = {
    // Languages
    'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    
    // Frameworks & Libraries
    'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    
    // AI & ML (using custom/generic icons)
    'Ollama': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'MCP': 'https://img.icons8.com/fluency/48/artificial-intelligence.png',
    'Generative AI': 'https://img.icons8.com/fluency/48/chatgpt.png',
    'LLM': 'https://img.icons8.com/fluency/48/brain.png',
    'AI Prompt Engineering': 'https://img.icons8.com/fluency/48/code.png',
    'RAG': 'https://img.icons8.com/fluency/48/database.png',
    
    // Databases
    'SQL': 'https://img.icons8.com/color/48/sql.png',
    'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    
    // DevOps & Tools
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
  };

  const skillCategories = [
    {
      category: 'Languages',
      items: ['C', 'C++', 'Java', 'Python', 'Dart'],
      color: '#3b82f6'
    },
    {
      category: 'Frameworks & Libraries',
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'React', 'Node.js'],
      color: '#8b5cf6'
    },
    {
      category: 'AI & Machine Learning',
      items: ['Ollama', 'MCP', 'Generative AI', 'LLM', 'AI Prompt Engineering', 'RAG'],
      color: '#10b981'
    },
    {
      category: 'Databases',
      items: ['SQL', 'SQLite', 'PostgreSQL', 'MongoDB'],
      color: '#f59e0b'
    },
    {
      category: 'DevOps & Tools',
      items: ['Docker', 'Git', 'AWS'],
      color: '#ef4444'
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
