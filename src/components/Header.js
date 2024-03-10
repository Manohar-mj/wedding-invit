// src/components/Header.js
import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <div className="header">
      <div className="left-section">
        <div className="text-content">
          <h2>Eswar + Satya</h2>
          <p>20th March 2024</p>
          <p className="love-quote">"A successful marriage requires <br/>falling in love many times,<br/> always with the same person💙."</p>
          
        </div>
        
      </div>
      <div className="right-section">
        <img src={process.env.PUBLIC_URL + '/img.jpg'} alt="Eswar and Satya" />
      </div>
    </div>
  );
};

export default Header;



