import React, { useState, useEffect } from 'react';


const Plywood = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = [
    '/media/images/T1.webp',
    '/media/images/T2.webp',
  
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
            <span className="gold-text">EDGE BANDING TAPE</span>
            <span className="underline-animation"></span>
          </h2>
     

      <p className="animate-text floating-text">
     If you’ve seen furniture being made, you might have noticed that wooden boards have a raw edge when cut. This raw edge, if left uncovered, can pose serious problems for the furniture. Apart from looking unsightly and scratching the skin if someone bumps into them, these exposed edges allow moisture to seep in, which in turn makes the wood warp and become lumpy. To prevent these issues, edge bands were created – As they say “Necessity is the mother of invention”. Edge bands are placed on the end of raw wood boards to cover the ends and thus seal it from moisture. It’s a narrow strip of material used to create durable and aesthetically pleasing trim edges during finish carpentry. Find it easily at our plywood shop in lucknow.
      </p>

      <p className="animate-text floating-text delay-1">
       
      </p>

      <div className="brands-section">
    
        <ul className="brands-list">
          {[
            "REHAU", "E3", 
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