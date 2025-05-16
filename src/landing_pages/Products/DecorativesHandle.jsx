import React, { useState, useEffect } from 'react';


const Plywood = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = [
    '/media/images/DH1.webp',
    '/media/images/DH2.webp',
    '/media/images/DH3.webp',
    '/media/images/DH4.webp'
  ];

  // Auto-change images every 3 seconds (pauses on hover)
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
   <div className="plywood-container">
  <div className="gold-border-top"></div>

  <div className="plywood-content-wrapper">
    {/* 📝 Text on Left */}
    <div className="content-wrapper plywood-flex">
    <div className="text-content">
      <h2 className="subtitle-animation">
            <span className="gold-text">DECORATIVE HANDLES / TOWER BOLTS</span>
            <span className="underline-animation"></span>
          </h2>
     

      <p className="animate-text floating-text">
      Handles are a medium between through which we reach to our desires kept in a cabinet or sitting across the door. Handles are the major accessories to any furniture capable of carrying them, we provide a wide range of decorative handles for you to pick out and decide what suits best to you.
      </p>

      <p className="animate-text floating-text delay-1">
       
      </p>

      <div className="brands-section">
    
        <ul className="brands-list">
          {[
            "BECKER", "COLORS", "CURZONE",
            "ASTRO", 
          ].map((brand, index) => (
            <li key={index} className="brand-item" style={{ '--delay': index * 0.1 + 's' }}>
              <span className="brand-icon">✓</span>
              {brand}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* 🖼️ Image Carousel on Right */}
    <div 
      className="image-carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-track" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <div className="image-overlay"></div>
            <img src={image} alt={`Plywood ${index + 1}`} className="carousel-image" />
        
          </div>
        ))}
      </div>
      <div className="carousel-nav">
        <button className="nav-arrow prev" onClick={() => setCurrentImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))}>
          &lt;
        </button>
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button key={index} className={`dot ${index === currentImageIndex ? 'active' : ''}`} onClick={() => setCurrentImageIndex(index)} />
          ))}
        </div>
        <button className="nav-arrow next" onClick={() => setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))}>
          &gt;
        </button>
      </div>
    </div>
  </div>

  <div className="gold-border-bottom"></div>
</div>
</div>
  );
};

export default Plywood;