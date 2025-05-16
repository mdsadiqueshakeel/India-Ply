import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // import the styles

const BrandSection = ({ title, image, handles = [], items, reverse }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,  // animation duration in ms
      easing: "ease-in-out",  // easing effect
      once: true,  // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div style={{ padding: "60px 0", backgroundColor: "#fdf7ef" }}>
      <Container>
        <Row className={`align-items-center ${reverse ? "flex-row-reverse" : ""}`}>
          <Col md={6} className="mb-4 mb-md-0" data-aos={reverse ? "fade-left" : "fade-right"}>
            <img
              src={image}
              alt={title}
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "550px", objectFit: "cover" }}
            />
          </Col>
          <Col md={6} data-aos={reverse ? "fade-right" : "fade-left"}>
            <h3
              className="mb-4"
              style={{
                color: "#b05e25",
                fontWeight: "700",
                fontSize: "1.75rem",
                textTransform: "uppercase",
              }}
            >
              {title}
            </h3>
            {items.map((item, index) => (
              <div key={index} className="mb-4">
                <h5
                  style={{
                    marginBottom: "6px",
                    color: "#a0522d",
                    fontWeight: "600",
                    marginBottom: "1.5rem",
                  }}
                >
                  {item.name}
                </h5>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#333",
                    lineHeight: "1.6",
                    marginBottom: "1.5rem",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}

            {handles && handles.length > 0 && (
              <div style={{ marginTop: "30px" }}>
                {handles.map((handle, index) => (
                  <div key={index} className="mb-3">
                    <h6
                      style={{
                        marginBottom: "5px",
                        fontWeight: "500",
                        color: "#000",
                      }}
                    >
                      <i
                        className="fa-regular fa-circle"
                        style={{ color: "#a0522d", fontSize: "0.7rem", fontWeight: "500" }}
                      ></i>{" "}
                      {handle}
                    </h6>
                  </div>
                ))}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};



export default BrandSection;
