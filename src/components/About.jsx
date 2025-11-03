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
            <h3 className="about-heading">AI Engineer & Innovator</h3>
            <p>
              I'm <strong>LEBI RAJA</strong>, an Artificial Intelligence and Data Science engineering student at Karunya University. 
              My journey in tech is driven by curiosity and the desire to turn ideas into tangible, impactful tools that make life easier and smarter.
            </p>
            <p>
              I've built multiple AI-driven projects — from <strong>StudyMateAI</strong>, a personalized learning assistant, to <strong>CareerWise AI</strong>, 
              an intelligent career mentor. I develop creative computer vision systems that combine gesture recognition and language models to create 
              futuristic human-computer interaction experiences.
            </p>
            <p>
              Outside of development, I'm an anime enthusiast, traveler, and a thinker who enjoys exploring both technology and self-discovery. 
              My goal is to create a lasting legacy through innovation, creativity, and empathy-driven design.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h4>2+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>10+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>5+</h4>
                <p>Collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
