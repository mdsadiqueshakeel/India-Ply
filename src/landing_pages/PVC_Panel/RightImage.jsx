import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const guidePoints = [
  'IDENTIFY THE OVERALL DESIGN THEME AND STYLE.',
  'SELECT THE COLOUR SCHEME AND EXISTING DECOR ELEMENTS THAT COMPLEMENT EACH OTHER.',
  'CHOOSE A PANEL DESIGN AND TEXTURE ACCORDING TO THE OVERALL THEME.',
  'CONSULT AN EXPERT WHO WILL PROVIDE YOU THE BEST ADVICE ACCORDING TO YOUR DEMANDS.',
]

const PerfectGuide = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section style={{ background: '#fcf8f3', padding: '60px 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Text Content */}
          <Col md={6} data-aos="fade-right">
            <h2 style={{ color: '#a24e00', fontWeight: 400, fontSize: "1.8rem", marginBottom: '30px' }}>
              PERFECT GUIDE TO GET YOUR IDEAL PVC PANELS
            </h2>
            <ul className="list-unstyled">
              {guidePoints.map((point, index) => (
                <li key={index} className="d-flex mb-3 align-items-start">
                  <span style={{ color: '#c67e40', fontSize: '1.3rem', marginRight: '10px' }}>✔</span>
                  <span style={{ fontWeight: 'bold', letterSpacing: '0.5px'  }}>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
                <br />
              We provide all the guidance as the best PVC Wall Panel Shop in Lucknow with the best PVC Wall Panel Price in Lucknow.
            </p>
          </Col>

          {/* Image Content */}
          <Col md={6} data-aos="fade-left" className="text-center mt-4 mt-md-0">
            <img src="media/images/pvcpanel3.png" alt="PVC Panels Guide" className="img-fluid rounded shadow-sm" style={{ height: '80vh' }}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PerfectGuide;
