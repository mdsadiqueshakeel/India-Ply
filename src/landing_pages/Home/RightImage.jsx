import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function RightImage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="india-ply-section py-5 px-3 px-md-5">
      <div className="container">
        <div className="row align-items-start position-relative">
          {/* Text Section */}
          <div className="col-md-5 mb-5" data-aos="fade-up">
            <h2 className="section-title">
              India Ply - Plywood Wholesale Dealers
            </h2>
            <p className="lead">
              India Ply, based in Jehanabad, Bihar, was established in 2010 and
              has quickly grown into one of the most trusted names in the
              plywood and interior solutions sector. Founded by Mr. Ehtasham
              Alam, the company is known for delivering superior quality and
              exceptional customer service.
            </p>
            <p className="lead">
              Having completed 200+ projects and serving 500+ clients, India Ply
              takes pride in delivering value that goes beyond just materials —
              we provide lifestyle solutions that transform homes and
              businesses.
            </p>
            <h4>
  <a href="/about-us" className="learn-more-link">
    Learn More →
  </a>
</h4>

          </div>

          <div className="col-1"></div>

          {/* Image Section with Overlap and Animation */}
          <div className="col-md-5 position-relative">
            <div className="image-wrapper enhanced-wrapper">
              <div className="decorative-bg "></div>
              <img
                src="media/images/R1.png"
                alt="India Ply Store"
                className="img-fluid main-img"
                data-aos="fade-right"
              />
              <img
                src="media/images/R2.png"
                alt="India Ply Interior"
                className="img-fluid overlay-img"
                data-aos="fade-left"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightImage;
