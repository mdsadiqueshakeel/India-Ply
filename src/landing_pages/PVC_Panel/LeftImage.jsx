import React, { useState, useEffect } from 'react';

const LeftImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = [
    '/media/images/pvcpanel1.png',
    '/media/images/pvcpanel2.png',
    '/media/images/pvcpanel3.png',
  ];

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  return (
    <div className="hardware-container">
      <div className="gold-border-top"></div>
      
      <div className="content-wrapper reverse-layout">
        {/* Text Content - Left Side */}
        <div className="text-content">
          <h2 className="subtitle-animation">
            <span className="gold-text">PVC PANELS</span>
            <span className="underline-animation"></span>
          </h2>
          
          <div className="text-content-inner">
            <p className="animate-text floating-text">
              Our PVC (polyvinyl chloride) panel is a high-performance polymer that is used for interior decorations due to its aesthetic and appealing features in residential homes, commercial buildings, offices, kitchens, bathrooms, and retail spaces. It is known for its spectacular properties like
            </p>
        
            <div className="brands-section">
              <h3 className="brands-title">
                <span className="gold-bar"></span>
                HARDWARE CATEGORIES
                <span className="gold-bar"></span>
              </h3>
              <ul className="brands-list">
                {[
                  "MOISTURE-RESISTANT",
                  "EASY MAINTAINANCE",
                  "ECONOMICAL AND AFFORDABLE",
                  "ENVIRONMENTAL PROTECTION",
                ].map((category, index) => (
                  <li 
                    key={index} 
                    className="brand-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="brand-icon">✓</span>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Image Carousel - Right Side */}
        <div className="image-carousel-wrapper">
          <div 
            className="image-carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <div className="image-overlay"></div>
                  <img 
                    src={image}
                    alt={`Hardware ${index + 1}`}
                    className="carousel-image"
                  />
            
                </div>
              ))}
            </div>
            <div className="carousel-nav">
              <button 
                className="nav-arrow prev"
                onClick={() => setCurrentImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))}
              >
                &lt;
              </button>
              <div className="carousel-dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
              <button 
                className="nav-arrow next"
                onClick={() => setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="gold-border-bottom"></div>
    </div>
  );
};

export default LeftImage;
