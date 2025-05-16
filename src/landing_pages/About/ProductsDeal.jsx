import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const products = [
    'PLYWOOD', 'BLOCK BOARDS', 'LAMINATES', 'VENEERS',
    'W.P.C / PVC', 'LOCKS', 'HDHMR BOARD', 'DECORATIVE PRODUCTS',
  ];

  return (
    <section className="products-section py-5">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="section-heading">PRODUCTS WE DEAL IN</h3>
            <p className="section-description">
              We deal in most prominent, refined and innovative range of products across numerous categories:
            </p>
          </div>
          <div className="col-md-8">
            <div className="row">
              {products.map((product, index) => (
                <div key={index} className="col-sm-6 mb-2">
                  <div className="product-item">
                    <span className="dash">—</span> {product}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Products;
