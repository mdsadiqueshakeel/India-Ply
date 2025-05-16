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
            <span className="gold-text">LEMINATES</span>
            <span className="underline-animation"></span>
          </h2>
          
          <div className="text-content-inner">
            <p className="animate-text floating-text">
             Laminates primarily used as furniture surface materials or wall paneling. It can be manufactured as either high or low-pressure laminate, with the two processes not much different from each other except for the pressure applied in the pressing process. It is made by pressing together multiple layers of plastic resins and flat paper. A printed process is used to give it a wood grain appearance. Often, the upper layer is printed with decorative pattern or colors, and given a shiny finish, thereby giving it a manufactured look. An ounce of prevention is worth a pound of cure.
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
                  "GREEN NEW MIKA",
                  "CENTURY LAM",
                  "GREEN LAM",
                  "DORBY",
                  "STYLAM",
                  "ROYAL CROWN",
                  "WOOD STOCK"
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
