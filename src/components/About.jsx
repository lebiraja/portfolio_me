import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">
          About Me
          <span className="title-underline"></span>
        </h2>
        <div className="about-content">
          <div className="about-image-container">
            <div className="image-backdrop"></div>
            <div className="about-image">
              <img 
                src="/profile.jpg" 
                alt="Lebi Raja - AI Engineer" 
                loading="lazy"
                decoding="async"
              />
              <div className="image-border"></div>
            </div>
          </div>
          <div className="about-text">
            <h3 className="about-heading">AI Engineer & Machine Learning Specialist</h3>
            <p>
              I'm <strong>LEBI RAJA</strong>, an Artificial Intelligence and Data Science student at Karunya Institute of Technology and Sciences.
              Specialized in designing and deploying intelligent systems — including Retrieval-Augmented Generation (RAG) pipelines, Large Language Model (LLM)
              fine-tuning, and Computer Vision applications with hands-on experience in production-ready, user-centric products.
            </p>
            <p>
              I've engineered multiple AI-driven projects spanning RAG architectures, LLM fine-tuning with LoRA, voice-to-text utilities, and intelligent data processing systems.
              My work bridges theoretical AI concepts with practical real-world applications, from <strong>ClarityMentor</strong> (fine-tuned philosophical AI) to <strong>DataBoy</strong>
              (AI-powered data cleaning). I specialize in local LLM integration, scalable AI solutions, and computer vision systems.
            </p>
            <p>
              Passionate about building scalable AI technologies that solve real-world problems with innovation, technical excellence, and thoughtful design.
              Experienced in mentoring teams on LLMs, RAG pipelines, and production-level code quality.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h4>1.5+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>12+</h4>
                <p>Projects Shipped</p>
              </div>
              <div className="stat-item">
                <h4>3+</h4>
                <p>Major Roles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
