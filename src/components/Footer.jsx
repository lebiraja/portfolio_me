import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Lebi Raja. All rights reserved.</p>
        <p>Crafted with precision & passion using React</p>
      </div>
    </footer>
  );
};

export default Footer;
