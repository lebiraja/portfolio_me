import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>
      <div 
        className="gradient-overlay"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(37, 99, 235, 0.15), rgba(124, 58, 237, 0.1) 40%, transparent 60%)`
        }}
      ></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for work
        </div>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">LEBI RAJA</span>
        </h1>
        <p className="hero-subtitle">AI Engineer & Machine Learning Specialist</p>
        <p className="hero-description">
          Building intelligent systems with RAG pipelines, LLM fine-tuning, and Computer Vision.
          Specializing in production-ready AI solutions, from local LLM integration to scalable data processing systems.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            <span>View My Work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">
            <span>Contact Me</span>
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
