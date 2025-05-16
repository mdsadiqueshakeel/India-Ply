import { useEffect, useState } from 'react';

const Hardware = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = [
    '/media/images/ld.webp',
    
  
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
            <span className="gold-text">TERRA SKREN</span>
            <span className="underline-animation"></span>
          </h2>
          
          <div className="text-content-inner">
            <p className="animate-text floating-text">
          The word terracotta originates quite literally from the Italian translation “baked earth” and its use across the globe has a prominent place in history (and continuous to be vastly used today.) terracotta is one of the most distinct types of clay you’ll find., given it’s rich, rust red/orange coloring. The reason for this distinct color is that the iron content in terracotta’s clay body reacts with oxygen and gives it a hue that ranges through reds/oranges/yellows, and even pinks.
            </p>
            
           
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
