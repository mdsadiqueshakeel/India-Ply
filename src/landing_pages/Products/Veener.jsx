import React, { useState, useEffect } from 'react';

const Hardware = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = [
    '/media/images/v1.webp',
    '/media/images/v2.webp',
    '/media/images/v3.webp'
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
            <span className="gold-text">VENEER</span>
            <span className="underline-animation"></span>
          </h2>
          
          <div className="text-content-inner">
            <p className="animate-text floating-text">
           Veneer is the middleman between the laminate and solid wood. Its construction is similar to that of laminate with the primary difference being that the outer layer of veneer is made of real solid wood. The inside of the veneer is made of synthetic material such as lower quality wood base, flat paper, MDF, or particleboard. Thus, it looks similar to solid wood while being lightweight. Most veneer layers are less than 1/8 inch thick. In comparison to laminate, the veneer is softer, and hence a little less durable.
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
                  "DUNEXT",
                  "GREEN PANAL",
                  "CENTUARY VENEER"
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
