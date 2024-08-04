import React from 'react';
import './footer.css';  
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <Link to="/faqs">FAQs</Link>
          <Link to="/policies">Policies</Link>
          <Link to="/">Contacts</Link>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} TechHub.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
