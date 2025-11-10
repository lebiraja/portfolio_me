import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Intern',
      company: 'Innovate Intern',
      period: '2025 - July',
      description: 'Developed a CCN based model for Leaf disease detection and classification, achieving high accuracy and efficiency in real-time applications.',
      achievements: [
    
      ]
    },
    {
      title: 'Tech Lead',
      company: 'IITM IC Build Club',
      period: '2024 - Present',
      description: 'Leading cross-disciplinary teams at IIT Madras Innovation Centre to design and build intelligent hardware prototypes and AI-powered systems that merge software with real-world engineering.',
      achievements: [

      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">
          Work Experience
          <span className="title-underline"></span>
        </h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
