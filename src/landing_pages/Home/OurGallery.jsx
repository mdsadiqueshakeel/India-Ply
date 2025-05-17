import { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button, Modal } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.gallery-item, .section-title, .explore-btn').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const images = [
    "/media/images/img1.webp",
    "/media/images/img2.webp",
    "/media/images/img3.webp",
    "/media/images/img4.webp",
    "/media/images/img5.webp",
    "/media/images/img7.webp",
    "/media/images/img8.webp",
    "/media/images/img9.webp",
    "/media/images/img10.webp",
    "/media/images/img12.webp",
    "/media/images/img1.webp",
    "/media/images/d1.webp"
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const navigate = (direction) => {
    if (direction === 'prev') {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <section className="gallery-section py-5 bg-white">
      <Container className="d-flex flex-column align-items-center">
        {/* Header Section with animation */}
        <div className="text-center mb-5 section-title">
          <h2 className="text-uppercase font-weight-bold mb-3 animate__animated">
            OUR GALLERY
          </h2>
          <p className="animate__animated">Discover our collection of memorable moments</p>
        </div>

        {/* Gallery Grid */}
        <Row className="gallery-grid justify-content-center w-100">
          {images.map((img, index) => (
            <Col 
              key={index} 
              xs={6} 
              md={4} 
              lg={3} 
              className="gallery-item-col mb-4 px-2"
            >
              <div 
                className="gallery-item position-relative overflow-hidden rounded"
                onClick={() => openModal(index)}
              >
                <Image 
                  src={img} 
                  alt={`Gallery item ${index + 1}`} 
                  fluid
                  className="gallery-img"
                />
                <div className="gallery-overlay d-flex align-items-center justify-content-center">
                  <div className="overlay-content text-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="zoom-icon">
                      <path d="M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Explore More Button with animation */}
        <div className="text-center mt-4 explore-btn-wrapper">
          <Button 
            variant="outline-dark" 
            size="lg" 
            className="px-4 explore-btn animate__animated"
          >
            EXPLORE MORE
          </Button>
        </div>

        {/* Image Modal */}
        <Modal 
          show={showModal} 
          onHide={closeModal}
          centered
          size="lg"
          className="gallery-modal"
        >
          <Modal.Body className="p-0 position-relative">
            <button 
              className="modal-close-btn" 
              onClick={closeModal}
            >
              <FaTimes />
            </button>
            
            <div className="modal-image-container">
              <Image 
                src={images[currentImageIndex]} 
                fluid
                className="modal-image"
              />
            </div>
            
            <button 
              className="nav-btn prev-btn"
              onClick={() => navigate('prev')}
            >
              <FaChevronLeft />
            </button>
            
            <button 
              className="nav-btn next-btn"
              onClick={() => navigate('next')}
            >
              <FaChevronRight />
            </button>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}

export default Gallery;