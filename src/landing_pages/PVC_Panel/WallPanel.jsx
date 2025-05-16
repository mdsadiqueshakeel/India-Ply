import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaThumbsUp,
  FaWater,
  FaMoneyBillAlt,
  FaChartLine,
  FaWeight,
  FaFire,
  FaWrench,
  FaCheckCircle,
  FaLeaf,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaThumbsUp size={30} />,
    title: 'Durability',
    desc: 'Damages are easily prevented even under severe pressures due to their longevity property.',
  },
  {
    icon: <FaWater size={30} />,
    title: 'Moisture-Resistant',
    desc: 'They will never turn mouldy or gross which makes them perfect for bathrooms and kitchens.',
  },
  {
    icon: <FaMoneyBillAlt size={30} />,
    title: 'Economical And Affordable',
    desc: 'Compared to other alternatives PVC is relatively cheap and possesses much more features than others.',
  },
  {
    icon: <FaChartLine size={30} />,
    title: 'Sound Insulation Performance',
    desc: 'For all the tranquillity enthusiasts, it can reduce the spread of sound which maintains indoor comfort.',
  },
  {
    icon: <FaWeight size={30} />,
    title: 'Lightweight',
    desc: 'For all the light-load enthusiasts, this is the best option as it can be handled and installed anywhere easily.',
  },
  {
    icon: <FaFire size={30} />,
    title: 'Fire Resistance',
    desc: 'Its fire resistance property makes it a safer option than other alternatives.',
  },
  {
    icon: <FaWrench size={30} />,
    title: 'Easy Maintenance',
    desc: 'Its lustrous appearance can be maintained by just wiping it down with a damp cloth or mild detergent to remove any dirt.',
  },
  {
    icon: <FaCheckCircle size={30} />,
    title: 'Flexibility',
    desc: 'This allows the material to be moulded into any form making it the best option for any kind of customization and versatile installation options.',
  },
  {
    icon: <FaLeaf size={30} />,
    title: 'Environmental Protection',
    desc: 'Made from recyclable and reusable materials, these panels are an eco-friendly choice for environment lovers..',
  },
];

const WhyPVCPanel = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <section style={{ backgroundColor: '#fdfaf5', padding: '60px 0' }}>
        <h3 className="text-center mb-5" style={{ color: '#b5672d', fontWeight: '600' }}>
          WHY PVC WALL PANEL?
        </h3>
      <Container>
        <Row>
          {features.map((feature, index) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={index} data-aos="fade-up">
              <Card className="text-center shadow-sm feature-card">
                <Card.Body>
                  <div
                    className="icon-wrapper mx-auto mb-3"
                    style={{
                      backgroundColor: '#c67e40',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    }}
                  >
                    {feature.icon}
                  </div>
                  <Card.Title style={{ color: '#c67e40', fontSize: '1.2rem', fontWeight: '600' }}>
                    {feature.title}
                  </Card.Title>
                  <Card.Text style={{ color: '#444', fontWeigh:"100", fontSize: "0.8rem" }}>{feature.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Hover effect CSS */}
      <style jsx="true">{`
        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: none;
          background-color: #fffaf3;
        }
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default WhyPVCPanel;
