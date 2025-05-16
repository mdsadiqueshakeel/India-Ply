import { useEffect, useState } from 'react';

const Hardware = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = [
    '/media/images/cp1.webp',
    '/media/images/cp2.webp',
    '/media/images/cp3.webp',
    '/media/images/cp4.webp',
  
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
            <span className="gold-text">CHARCOAL PANELS / WOOD RAFTER</span>
            <span className="underline-animation"></span>
          </h2>
          
          <div className="text-content-inner">
            <p className="animate-text floating-text">
             Give your home’s wall a smart shade or look by redesigning them using our Premium Charcoal Panels product options – An ultimate range of colors, patterns and designs.
            </p>
            
            <p className="animate-text floating-text delay-1">
             A combination of Charcoal and Polystyrene proportionately. Charcoal fuses solidarity to the item though Styrofoam produced using reused thermocol (EPS and HIPS) makes the item impervious to twisting. Other benefits of Charcoal Panels are that these are bio-degradable and environment well disposed, will face temperatures up to a hundred and fifty degrees centigrade and subsequently it’s utilized altogether crosswise over all hot temperatures countries.
            </p>
            
          <p>Combining technological materials within the spectrum of style, luxury and affordability, it displays your reflection into the depths and décor of every space.</p>
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
