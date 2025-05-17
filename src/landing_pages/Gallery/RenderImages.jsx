import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";

const PhotoGallery = ({ images = [] }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div style={{ padding: "60px 0", backgroundColor: "#fffaf4" }}>
      <Container>
        <Row>
          {images.map((image, index) => (
            <Col
              key={index}
              md={4}
              sm={6}
              xs={12}
              className="mb-4"
              data-aos="zoom-in"
            >
              <div className="gallery-img-wrapper">
                <img
                  src={image}
                  alt={`gallery-${index}`}
                  className="gallery-img"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PhotoGallery;
