// src/components/Footer.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import solid (regular) icons
import './Footer.css';

const Footer = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div className="footer" style={fadeIn}>
      <div className="footer-section">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
      </div>
      <div className="footer-section">
        <h3>Contact Details:</h3>
        {/* <br/> */}
        <p>
          <FontAwesomeIcon icon={faInstagram} />
          <a href="https://www.instagram.com/smb.photography2k19?igsh=MWY3cjdqejYzNndyaQ==">
             <p>smb.photography2k19</p>
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faWhatsapp} />
          <a href="tel:+917995319837"><p> +91 799-531-9837</p></a>
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> 
          <a href="mailto:maheshrocks67143@gmail.com">
            <p>maheshrocks67143@gmail.com</p>
          </a>
        </p>
      </div>
      <div className="footer-section services">
        <br/>
        <br/>
        <br/>
        <h3>Our Services : </h3>
        <p>Photography</p>
        <p>Photo Editing</p>
        <p>Graphic Design</p>
      </div>
    </animated.div>
  );
};

export default Footer;
