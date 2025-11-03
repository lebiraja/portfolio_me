import React from 'react';
import './Skills.css';

const Skills = () => {
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
                    {skill}
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
