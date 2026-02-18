import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Technical Lead — Build Club',
      company: 'IITM Incubation Cell, IIT Madras Innovation Centre',
      period: 'Jul 2025 – Jan 2026',
      description: 'Led end-to-end technical development of AI/ML-based projects aligned with startup and incubation goals.',
      achievements: [
        'Mentored team members on LLMs, RAG pipelines, and real-world AI system architecture',
        'Architected scalable AI solutions integrating local and cloud-based LLMs for academic and industrial use cases',
        'Conducted technical reviews, optimised model pipelines, and enforced production-level code quality standards'
      ]
    },
    {
      title: 'AI/ML Intern',
      company: 'Innovate Intern',
      period: 'Jun 2025 – Jul 2025',
      description: 'Developed a CNN-based model for leaf disease detection and classification, achieving high accuracy in real-time scenarios.',
      achievements: [
        'Built Python-based ML workflows using Pandas, NumPy, and Scikit-learn',
        'Gained practical exposure to deployment challenges and model optimization',
        'Worked on applied AI/ML projects covering data preprocessing, model training, and performance evaluation'
      ]
    },
    {
      title: 'Member — Build Club',
      company: 'IITM Incubation Cell, IIT Madras Innovation Centre',
      period: 'Sep 2024 – May 2025',
      description: 'Contributed to cross-disciplinary teams designing intelligent hardware prototypes and AI-powered systems.',
      achievements: [
        'Collaborated on projects merging software engineering with real-world hardware integration'
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
