
import React from 'react';

import { FaReact, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Made with <FaReact className="react-icon" /> by Nitya GV</p>
        <div className="social-icons">
          <a href="https://github.com/nityagv22" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="www.linkedin.com/in/nitya-gv-13636124b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
