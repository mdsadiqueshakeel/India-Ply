import React, { useState, useEffect } from 'react';


const Plywood = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = [
    '/media/images/wf1.webp',
    '/media/images/wf2.webp',
    '/media/images/wf3.webp',
   

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
            <span className="gold-text">WOODEN FLOORING / DECK FLOORING / HERRINGBONES              </span>
            <span className="underline-animation"></span>
          </h2>
     

      <p className="animate-text floating-text">
     Wood flooring is a classic look that has transcended centuries of style. (Plywood Dealers in Lucknow) It’s natural, eco-friendly, and incredibly durable. It’s no wonder people have been constructing wood flooring for ages. Any product manufactured from timber that is designed for use as flooring, either structural or aesthetic is wooden flooring.
      </p>
      <p>A deck is a flat surface capable of supporting weight, similar to a floor, but typically constructed outdoors, often elevated from the ground, and usually connected to a building. The term is a generalization of decks as found on ships. </p>

      <p className="animate-text floating-text delay-1">
       
      </p>

      <div className="brands-section">
        <h3 className="brands-title">
          <span className="gold-bar"></span>
          SOME OF THE BEST DECK FLOORING'S ARE 
          <span className="gold-bar"></span>
        </h3>
        <ul className="brands-list">
          {[
            "TREDITIONAL WOOD DECKING", "COMPOSITE WOOD DECKING", "PORCELIAN AND CERAMIC TITLE OUTDOOR FLOORING","CONCRETE","BRICK S AN OUTDOOR FLOORING OPTION ","ARTIFICIAL GRASS FOR OUTDOOR FLOORING"
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