import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p>Built with ❤️ using React</p>
      </div>
    </footer>
  );
};

export default Footer;
