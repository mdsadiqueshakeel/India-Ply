import { useEffect, useState } from 'react';

const Hero = () => {
  const slides = [
    {
      image: "/media/images/plywood-stack.jpg",
      title: "Premium Plywood Collection",
      subtitle: "Quality You Can Trust",
      description: "Discover our extensive range of high-grade plywood for all your construction and interior needs."
    },
    {
      image: "/media/images/plywood-showroom.jpg",
      title: "Expert Plywood Solutions",
      subtitle: "For Professionals & Homeowners",
      description: "Trusted by contractors and DIY enthusiasts for over 20 years in the industry."
    },
    {
      image: "/media/images/plywood-products.jpg",
      title: "Interior & Exterior Grade",
      subtitle: "Perfect for Every Application",
      description: "From kitchen cabinets to outdoor furniture, we have the right plywood for your project."
    },
    {
      image: "/media/images/plywood-closeup.jpg",
      title: "Sustainable Plywood Products",
      subtitle: "Eco-Friendly Materials",
      description: "Responsibly sourced materials that don't compromise on quality or durability."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateText, setAnimateText] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const nextSlide = () => {
    setAnimateText(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setAnimateText(true);
      setImageError(false);
    }, 300);
  };

  const prevSlide = () => {
    setAnimateText(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setAnimateText(true);
      setImageError(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="hero-container">
      <div 
        className="hero-slide" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${slides[currentSlide].image})`
        }}
      >
        <div className={`hero-content ${animateText ? 'animate' : ''}`}>
          <h1>{slides[currentSlide].title}</h1>
          <h2>{slides[currentSlide].subtitle}</h2>
          <p>{slides[currentSlide].description}</p>
          <button className="contact-btn">GET A QUOTE</button>
        </div>
        
        <button className="nav-btn prev-btn" onClick={prevSlide} aria-label="Previous slide">
          &#10094;
        </button>
        <button className="nav-btn next-btn" onClick={nextSlide} aria-label="Next slide">
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Hero;