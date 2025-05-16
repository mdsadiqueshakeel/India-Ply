import React, { useState, useEffect } from 'react';


const Plywood = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = [
    '/media/images/al1.webp',
    '/media/images/al2.webp',
   

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
            <span className="gold-text">ALABASTERS             </span>
            <span className="underline-animation"></span>
          </h2>
     

      <p className="animate-text floating-text">
   A malleable natural stone-looking product, the Alabaster Sheet is an innovative and versatile material that perfectly replicates the elegant appearance of natural stone while offering numerous practical advantages. Unlike traditional stone, which is heavy and difficult to work with, this alabaster sheet is nearly two-thirds lighter, making it an ideal choice for a wide range of design applications. Its lightweight nature allows for easier transportation, installation, and handling, significantly reducing labor costs and time. In addition, the sheet can be easily cut, routed, and finished using standard woodworking tools, enabling both professionals and hobbyists to work with it effortlessly and creatively.
      </p>
      <p>Available in various designs, colors, and surface patterns, it offers great aesthetic flexibility, allowing customers to choose the perfect style to match their architectural or interior design needs. Whether used in residential, commercial, or hospitality settings, it adds a luxurious and modern touch to walls, ceilings, countertops, or decorative panels.</p>
     
      <p className="animate-text floating-text delay-1">
       
      </p>

    
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