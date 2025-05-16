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
            Founded in 2010 and headquartered in Jehanabad, Bihar, India Ply has grown into a leading name in the plywood and interior solutions industry. Under the visionary leadership of Mr. Ehtasham Alam, the company has built a reputation for delivering products that are not only high in quality but also aligned with the evolving needs of modern interiors.
            </p>
            <p className="lead">
            At India Ply, we believe that we are not just supplying materials — we are crafting experiences. Our comprehensive range of plywood and interior solutions is designed to bring durability, elegance, and a touch of innovation to every space. Whether it's a residential home or a commercial establishment, our products help transform ordinary interiors into extraordinary environments.
            </p>
            <p className="lead">
            What sets us apart is our deep understanding of both traditional values and contemporary design trends. This allows us to offer solutions that are aesthetically pleasing, functionally superior, and built to last. Our team of skilled professionals ensures that every project is executed with precision and a customer-first approach.
            </p>
            <p className="lead">
          Thanks to the trust and support of our clients, India Ply continues to be a top choice in Bihar’s competitive plywood market, setting benchmarks for quality, reliability, and innovation.
            </p>
          </div>

          <div className="col-1"></div>

          {/* Image Section with Overlap and Animation */}
          <div className="col-md-5 position-relative">
            <div className="image-wrapper enhanced-wrapper">
              <div className="decorative-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="India Ply Store"
                className="img-fluid main-img"
                data-aos="fade-right"
              />
              <img
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
