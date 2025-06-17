import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copy">© {new Date().getFullYear()} StayFinder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
