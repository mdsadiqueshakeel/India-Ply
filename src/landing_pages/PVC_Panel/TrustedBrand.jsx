import React from "react";
import { Container } from "react-bootstrap";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const HeroWithText = () => {
  const backgroundImage =
    "media/images/pvcpanel4.avif"; // NEW professional plywood-style image

  const cardData = [
    {
      title: "DEALS IN TOP BRANDS OF PLYWOOD",
      text: "We deal with top brands to ensure premium and exquisite products for every customer.",
    },
    {
      title: "PROVIDES BEST CUSTOMER SERVICE",
      text: "We recommend and customize products to suit your design themes and personal needs.",
    },
    {
      title: "WIDE RANGE FROM PLYWOOD HARDWARE",
      text: "India Ply offers countless premium options with competitive prices in Jehanabad.",
    },
    {
      title: "BEST QUALITY PRODUCTS",
      text: "Timeless elegance and unmatched quality—beyond trends and market standards.",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(#61360dd0,#61360dd0), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        padding: "80px 0",
        textAlign: "center",
      }}
    >
        <h2
          style={{
            fontSize: "1rem",
            marginBottom: "20px",
            color: "#f0f0f0",
            letterSpacing: "1px",
          }}
          data-aos="fade-down"
        >
          TRUSTED BY OUR CUSTOMERS SINCE 2013
        </h2>

        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            marginBottom: "50px",
            color: "#fff",
          }}
          data-aos="zoom-in"
        >
          WHAT MAKES INDIA PLY THE BEST <br />
          PVC WALL PANEL SHOP IN JEHANABAD
        </h1>
      <Container>

        <div className="cards-grid">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HeroWithText;
