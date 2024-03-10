// src/components/ImageGallery.js
import React from 'react';
import './ImageGallery.css'; // Import the CSS file

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <div className="gallery-item">
        <img src="2.jpg" alt="Meet" className="gallery-image" />
        <div className="overlay">Meet😍</div>
      </div>
      <div className="gallery-item">
        <img src="1.jpg" alt="Talk" className="gallery-image" />
        <div className="overlay">Talk🫶</div>
      </div>
      <div className="gallery-item">
        <img src="4.jpg" alt="Love" className="gallery-image" />
        <div className="overlay">Love❤️</div>
      </div>
      <div className="gallery-item">
        <img src="3.jpg" alt="Together" className="gallery-image" />
        <div className="overlay">Together🫂</div>
      </div>
      <div className="gallery-item">
        <img src="5.jpg" alt="Forever" className="gallery-image" />
        <div className="overlay">Forever💑</div>
      </div>
      <div className="gallery-item">
        <img src="8.jpg" alt="Forever" className="gallery-image" />
        <div className="overlay">and Ever🤴👸</div>
      </div>
    </div>
  );
};

export default ImageGallery;
