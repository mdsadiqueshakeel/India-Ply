import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MissionVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="mission-vision-section py-5">
      <div className="container-fluid px-4 px-md-5">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
            <img
              src="media/images/unsplash4.avif"
              alt="Storefront"
              className="img-fluid mission-vision-img"
            />
          </div>

          {/* Right Side - Text */}
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="text-brown fw-bold mb-3">Our Mission</h2>
            <p className="mb-4">
              The mission statement of India Ply is to provide customized wood
              products to its permanent customers. We are plywood wholesale
              dealers and serve in high quality plywood and other products at
              competitive price.
            </p>

            <h2 className="text-brown fw-bold mb-3">Our Vision</h2>
            <p>
              The vision of India Ply is to structure the supply and increase
              the dealership by connecting with top notch processing brands.
              Aiming to be customers’ first choice through our commitment of
              quality products. We are on our way to become top plywood dealers
              in Jehanabad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
