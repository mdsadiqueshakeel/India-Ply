import React, { useState, useEffect } from 'react';

const Plywood = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = [
    '/media/images/hp1.webp',
    '/media/images/hp2.webp',
    '/media/images/hp3.webp',
    '/media/images/hp4.webp',
    '/media/images/hp5.webp',
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
    <div className="plywood-container">
      <div className="gold-border-top"></div>

      <div className="plywood-content-wrapper">
        {/* 🖼️ Image Carousel on Left */}
        <div className="content-wrapper plywood-flex">
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
                    alt={`Plywood ${index + 1}`}
                    className="carousel-image"
                  />
                </div>
              ))}
            </div>
            <div className="carousel-nav">
              <button
                className="nav-arrow prev"
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  )
                }
              >
                &lt;
              </button>
              <div className="carousel-dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${
                      index === currentImageIndex ? 'active' : ''
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
              <button
                className="nav-arrow next"
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  )
                }
              >
                &gt;
              </button>
            </div>
          </div>

          {/* 📝 Text on Right */}
          <div className="text-content">
            <h2 className="subtitle-animation">
              <span className="gold-text">HPL</span>
              <span className="underline-animation"></span>
            </h2>

            <p className="animate-text floating-text">
              High Pressure Laminate sheets are produced by saturating multiple
              layers of kraft paper with phenolic resin. A layer of printed
              décor paper is placed on top of the kraft paper before pressing.
              They are modern, strong, and resistant and beautifully designed to
              serve millions of functions. HPL sheets are utilized everywhere in
              the world due to its versatile nature and durability.
            </p>

            <div className="brands-section">
              <h3 className="brands-title">
                <span className="gold-bar"></span>
                BRANDS WE DEAL WITH PLYWOOD IN JEHANABAD
                <span className="gold-bar"></span>
              </h3>
              <ul className="brands-list">
                {[
                  'MERINO',
                  'GREEN LAM',
                  'AURA',
                  'PANAASH',
                  'GREEN NEW MICA',
                ].map((brand, index) => (
                  <li
                    key={index}
                    className="brand-item"
                    style={{ '--delay': index * 0.1 + 's' }}
                  >
                    <span className="brand-icon">✓</span>
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="gold-border-bottom"></div>
    </div>
  );
};

export default Plywood;
