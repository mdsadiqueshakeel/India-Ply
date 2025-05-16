import React, { useState, useEffect } from 'react';


const Plywood = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = [
    '/media/images/D.webp',
   
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
            <span className="gold-text">DECORATIVE PRODUCTS</span>
            <span className="underline-animation"></span>
          </h2>
     

      <p className="animate-text floating-text">
   The way your home looks determines the mood and atmosphere for you and your family. … A well decorated place can effectively put you at ease and get rid of anxiety. The decorations in various rooms make them more comfortable and appealing.
      </p>
      <p className="animate-text floating-text">
   Whether you’re searching for just the right hinge or other accessories to complete a project, we have all the final decorative hardware you will need. From hinges to other hardware, plywood fancy products, we can provide you the right item for the job.
      </p>

      <p className="animate-text floating-text delay-1">
       
      </p>

      <div className="brands-section">
      <h3 className="brands-title">
                <span className="gold-bar"></span>
               INDIA PLY DEAL'S IN A WIDE RANGE OF DECORATIVE'S PRODUCT
                <span className="gold-bar"></span>
              </h3>
        <ul className="brands-list">
          {[
            "CORIAN", "CHARCOAL PANELS / WOOD RAFTER", "LEMINATES DOOR",
            "METAL SUNMICA", 
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