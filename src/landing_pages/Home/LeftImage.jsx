import React, { useEffect } from 'react';

function Reasons() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reason-item, .left-image-container').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const reasons = [
    "BEST QUALITY PRODUCTS",
    "WIDE RANGE FROM PLYWOOD HARDWARE TO DECORATIVE PRODUCTS",
    "DEALS IN TOP BRANDS OF PLYWOOD",
    "PROVIDES BEST CUSTOMER SERVICE",
    "TRUSTED BY ITS CUSTOMER SINCE 2013"
  ];

  return (
    <section className="reasons-section">
      <div className="container">
        <div className="left-image-container">
          <img 
            src="/media/images/reason.jpg" 
            alt="Bajrang Plywood Shop" 
            className="reason-image"
          />
          <div className="image-overlay"></div>
        </div>
        
        <div className="reasons-content">
          <h2 className="section-title">SOME REASONS TO CHOOSE US</h2>
          <p className="section-description">
            Bajrang plywood shop in Lucknow, makes your dream projects remain
            desirous for years to come. Contributing with a product that is trendy and
            durable. Some reasons to choose us:
          </p>
          
          <ul className="reasons-list">
            {reasons.map((reason, index) => (
              <li key={index} className="reason-item">
                <div className="reason-bullet"></div>
                <span className="reason-text">{reason}</span>
              </li>
            ))}
          </ul>
          
          <div className="connect-section">
            <div className="divider"></div>
            <h3 className="connect-title">LET'S CONNECT</h3>
            <button className="connect-button">CONTACT US</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reasons;