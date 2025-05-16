import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const panelTrends = [
  {
    img: "/media/images/pvcpanel1.png",
    title: '3D PVC Panels',
    desc: 'Everyone is fascinated with 3d Art and with the 3d trend in panels one can provide a depth to the interior aesthetics.',
  },
  {
    img: "/media/images/pvcpanel2.png",
    title: 'PVC Panel Finishes',
    desc: 'Everyone has a different interior design concept and so many options available in PVC panels from glossy to matte. Your demands can be easily met at the PVC Wall Panel Shop in Lucknow.',
  },
  {
    img: "/media/images/pvcpanel3.png",
    title: 'PVC Panel Color Variations',
    desc: 'With different themes and concepts for various interior decorations, we provide a wide range of color variations to everyone making sure to meet all kinds of demands.',
  },
];

const PVCPanelsTrends = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section style={{ backgroundColor: '#c67e40', padding: '60px 0' }}>
        <h2 className="text-center text-white mb-4">PVC PANEL TRENDS</h2>
        <p className="text-center text-white mb-5 px-md-5">
          PVC Panels are constantly evolving and coming up with various features for decor enthusiasts.
          With our customer-centric approach, we are providing large options for various enthusiasts be it
          environment, solitude, light-load, or home decor. It is the best choice for everyone taking it from
          residential homes to commercial spaces. Let’s look at some trends:
        </p>
      <Container>

        <Row>
          {panelTrends.map((panel, index) => (
            <Col md={4} sm={12} className="mb-4" data-aos="fade-up" key={index}>
              <Card className="text-center trend-card h-100 shadow-sm">
                <Card.Img variant="top" src={panel.img} alt={panel.title} style={{ height: '350px', objectFit: 'contain', padding:'1rem 0 1rem 0' }} />
                <Card.Body>
                  <Card.Title style={{ color: '#c67e40', fontWeight: '600' }}>{panel.title}</Card.Title>
                  <Card.Text style={{ opacity:'80%', fontWeight: '300' }}>{panel.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx="true">{`
        .trend-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: none;
        }

        .trend-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </section>
  );
};

export default PVCPanelsTrends;
