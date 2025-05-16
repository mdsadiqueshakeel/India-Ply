import React, { useState, useEffect } from 'react';

const Hardware = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = [
    '/media/images/l1.png',
    '/media/images/l2.png',
    '/media/images/l3.png',
    '/media/images/l4.png',    
    '/media/images/l5.png',
    '/media/images/l6.png',
    '/media/images/l7.png',
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
            <span className="gold-text">LOCKS</span>
            <span className="underline-animation"></span>
          </h2>
          
          <div className="text-content-inner">
            <p className="animate-text floating-text">
             Each type of lock is built differently, but let’s take a look at the anatomy of a typical door lock usually used in homes or light commercial buildings. The main parts of a door lock are the cylinder, bolt, and box and strike plate. It is important to put your trust in the right lock when it comes to the safety of you and your family. We provide best locks at our plywood shop in lucknow for the safety purpose on doors, windows and other equipment.
            </p>
            
            <p className="animate-text floating-text delay-1">
              From modern minimalist designs to classic traditional styles, our hardware 
              collection offers the perfect finishing touch for any project.
            </p>
            
            <div className="brands-section">
              <h3 className="brands-title">
                <span className="gold-bar"></span>
               BRANDS WE DEAL WITH
                <span className="gold-bar"></span>
              </h3>
              <ul className="brands-list">
                {[
                  "GODREJ",
                  "LINK",
                  "IPSA ",
                  "DORSET",
                  "YALE",
                  "EUROPA LOCK",
                  "OZONE LOCKS"
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

export default Hardware;
