import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="Footer">
      <a href="https://github.com/N3tRunn3rr">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a href="https://www.linkedin.com/in/kenji-fleming">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
    </div>
  );
};

export default Footer;