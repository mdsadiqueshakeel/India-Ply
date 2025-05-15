import React from 'react';

function Hero({ title, backgroundImage }) {
  return ( 
    <section
      className="shared-hero"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="shared-hero-text">{title}</div>
    </section>
  );
}

export default Hero;
