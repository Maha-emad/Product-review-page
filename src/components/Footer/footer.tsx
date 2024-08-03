import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">FAQs</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Privacy Policies</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Contacts</a>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
