import { useEffect } from 'react';
import { Button, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import './AnotherLeftImage.css'; // We'll keep this minimal

function Products() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-item, .product-image-col').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const products = [
    "PLYWOOD",
    "HARDWARE",
    "LAMINATES",
    "DECORATIVE PRODUCTS",
    "VENEERS",
    "LOCKS",
    "EDGE BANDING TAPE",
    "PVC"
  ];

  return (
    <section className="products-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="order-md-2 product-image-col mb-4 mb-md-0">
            <div className="position-relative overflow-hidden rounded shadow-lg">
              <Image 
                src="/media/images/product.jpg" 
                alt="Our Products" 
                fluid
                className="product-image"
              />
              <div className="image-overlay"></div>
            </div>
          </Col>
          
          <Col md={6} className="order-md-1">
            <h2 className="text-uppercase font-weight-bold mb-4 text-brown">PRODUCTS WE DEAL IN</h2>
            <p className="lead mb-4">
              We deal in most prominent, refined and innovative range of products across numerous categories:
            </p>
            
            <ListGroup variant="flush" className="mb-4">
              {products.map((product, index) => (
                <ListGroup.Item 
                  key={index} 
                  className="product-item border-0 bg-transparent px-0 py-2"
                >
                  <div className="d-flex align-items-center">
                    <span className="product-icon mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                      </svg>
                    </span>
                    <span className="product-text font-weight-medium">{product}</span>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            
            <div className="text-center text-md-left">
              <Button 
                variant="outline-brown" 
                size="lg" 
                className="px-4 read-more-btn"
                href="/products"
              >
                READ MORE ABOUT PRODUCTS WE DEAL IN →
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Products;