import React, { useState, useEffect } from 'react';
    

const HappyClients = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [animate, setAnimate] = useState(true);

  const reviews = [
    {
      id: 1,
      name: "Mohan Singh",
      content: "It is one of the most trusted company dealing in plywood, hardware lamination, and other products. Once while browsing about the plywood companies I came across Bajrang plywood. It has shared relevant information about the products they deal in and the brands they are associated with. The websites are professionally done to provide required details to its customers. Right from the choice of wood, price and also assistance in getting some of the fixture thro the right source was awesome experience. The best part about them is their understand your requirements well and provide you with the best quality and price products."
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      content: "Excellent quality plywood and outstanding customer service. The team at Bajrang Plywood helped me choose the perfect materials for my furniture project. Their expertise and fair pricing made the entire process smooth and enjoyable."
    },
    {
      id: 3,
      name: "Priya Sharma",
      content: "I've been a loyal customer for over 5 years now. Their products are durable and worth every penny. The staff is knowledgeable and always willing to go the extra mile to ensure customer satisfaction. Highly recommended!"
    },
    {
      id: 4,
      name: "Vikram Patel",
      content: "The laminations available here are of superior quality with a wide variety to choose from. What impressed me most was their after-sales service. They genuinely care about their customers' needs."
    },
    {
      id: 5,
      name: "Anjali Gupta",
      content: "As an interior designer, I demand the best materials for my clients. Bajrang Plywood has never disappointed me. Their consistent quality and reliable supply make them my go-to supplier for all wood-related needs."
    },
    {
      id: 6,
      name: "Sanjay Verma",
      content: "The hardware products are top-notch and reasonably priced. The delivery was prompt and the packaging was secure. Will definitely purchase from them again for my construction projects."
    },
    {
      id: 7,
      name: "Neha Joshi",
      content: "What sets this company apart is their honesty and transparency. They clearly explain the pros and cons of each product, helping customers make informed decisions. Truly a customer-first business."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
        setAnimate(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const handlePrev = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
      setAnimate(true);
    }, 500);
  };

  const handleNext = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
      setAnimate(true);
    }, 500);
  };

  return (
    <section className="happy-clients-section">
      <div className="section-title">
        <h2>OUR HAPPY CLIENT'S</h2>
        <div className="divider"></div>
      </div>

      <div className="reviews-container">
        <button className="nav-btn prev-btn" onClick={handlePrev}>
          &lt;
        </button>

        <div className={`review-card ${animate ? 'animate' : ''}`}>
          <div className="quote-icon start">"</div>
          <p className="review-content">{reviews[currentReview].content}</p>
          <div className="quote-icon end">"</div>
          <h3 className="client-name">{reviews[currentReview].name}</h3>
        </div>

        <button className="nav-btn next-btn" onClick={handleNext}>
          &gt;
        </button>
      </div>

      <div className="review-indicators">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentReview ? 'active' : ''}`}
            onClick={() => {
              setAnimate(false);
              setTimeout(() => {
                setCurrentReview(index);
                setAnimate(true);
              }, 500);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HappyClients;