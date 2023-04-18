import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <h2 className="footer-header">Contact Us</h2>
      <p className="footer-contact">Call: +24579273990</p>
      <p className="footer-contact">9045 Embakasi Avenue, Nairobi</p>
      <p className="footer-contact">Email: support@actionhub.co.ke</p>
      <div className="footer-social-icons">
        <a href="#Facebook">
          <img src="https://img.icons8.com/fluency/1x/facebook-new.png" alt="Facebook" />
        </a>
        <a href="#Linkedin">
          <img src="https://img.icons8.com/fluency/1x/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="#Instagram">
          <img src="https://img.icons8.com/color/1x/instagram-new.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
