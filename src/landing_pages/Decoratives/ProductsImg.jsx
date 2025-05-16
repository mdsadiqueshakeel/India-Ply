import React, { useState, useEffect } from 'react';


const GLImages = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.gl-images-container');
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const glItems = [
    { id: 'GL-12727', size: '12 in.x 8 ft', image: 'gl1.png' },
    { id: 'GL-12706', size: '12 in.x 8 ft', image: 'gl2.png' },
    { id: 'GL-12702', size: '12 in.x 8 ft', image: 'gl3.png' },
    { id: 'GL-12719', size: '12 in.x 8 ft', image: 'gl4.png' },
    { id: 'GL-12713', size: '12 in.x 8 ft', image: 'gl5.png' },
    { id: 'GL-12717', size: '12 in.x 8 ft', image: 'gl6.png' },
    { id: 'GL-12705', size: '12 in.x 8 ft', image: 'gl7.png' },
    { id: 'GL-6153', size: '8 ft x 2 ft', image: 'gl8.png' },
    { id: 'GL-12727', size: '12 in.x 8 ft', image: 'd1.webp' },
    { id: 'GL-12706', size: '12 in.x 8 ft', image: 'd2.webp' },
    { id: 'GL-12702', size: '12 in.x 8 ft', image: 'd3.webp' },
    { id: 'GL-12719', size: '12 in.x 8 ft', image: 'd4.webp' },
    { id: 'GL-12713', size: '12 in.x 8 ft', image: 'd5.webp' },
    { id: 'GL-12717', size: '12 in.x 8 ft', image: 'd6.webp' },
    { id: 'GL-12705', size: '12 in.x 8 ft', image: 'd7.webp' },
    { id: 'GL-6153', size: '8 ft x 2 ft', image: 'd8.webp' },
    { id: 'GL-12727', size: '12 in.x 8 ft', image: 'd9.webp' },
    { id: 'GL-12706', size: '12 in.x 8 ft', image: 'd10.webp' },
    { id: 'GL-12702', size: '12 in.x 8 ft', image: 'd11.webp' },
    { id: 'GL-12719', size: '12 in.x 8 ft', image: 'd12.webp' },
    { id: 'GL-12713', size: '12 in.x 8 ft', image: 'd13.webp' },
    { id: 'GL-12717', size: '12 in.x 8 ft', image: 'd14.webp' },
    { id: 'GL-12705', size: '12 in.x 8 ft', image: 'd15.webp' },
    { id: 'GL-6153', size: '8 ft x 2 ft', image: 'd17.webp' }
  ];

  return (
    <div className={`gl-images-container ${isVisible ? 'animate' : ''}`}>
      <div className="gl-header">
        <h1 className="gl-title">Decorative's</h1>
        <div className="title-decoration">
          <div className="deco-line"></div>
          <div className="deco-icon">✦</div>
          <div className="deco-line"></div>
        </div>
      </div>
      
      <div className="gl-grid">
        {glItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`gl-item ${isVisible ? 'animate' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="gl-image-container">
              <img 
                src={`/media/images/${item.image}`} 
                alt={item.id} 
                className="gl-image"
              />
              <div className="gl-image-overlay"></div>
            </div>
            <div className="gl-info">
              <span className="gl-id">{item.id}</span>
              <span className="gl-size">/ {item.size}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GLImages;