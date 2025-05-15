import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css"; // Custom styles

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content container py-4">
        <div className="row">
          <div className="col-md-6 text-white">
            <img
              src="/"
              alt="India Ply Logo"
              className="mb-3"
            />
            <p>
              586, Bara Birwa,
              <br />
              Near Hotel Piccadily, Kanpur Road,
              <br />
              Lucknow, Uttar Pradesh, India 226012
            </p>
            <p>
              <strong>Office:</strong> +91 08271167719, 0522-4046608, +91
              9793638899
              <br />
              <strong>Director:</strong> +91 9795530227
              <br />
              <strong>Manager:</strong> +91 9793628899
            </p>
            <p>
              info@bajrangply.com
              <br />
              bajrangplywood8@gmail.com
            </p>
            <div className="social-icons mt-3">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="map-container">
              <a
                href="https://maps.app.goo.gl/7MMgb19MDmq9Va979?g_st=aw"
                target="_blank"
              >
                <img
                  src="media/images/location.png" style={{ width: '100%', height: 'auto' }}
                  alt="Map showing location"
                />
              </a>
              <a
                href="https://maps.app.goo.gl/7MMgb19MDmq9Va979?g_st=aw"
                target="_blank"
              >
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center text-white py-3">
        © COPYRIGHT {new Date().getFullYear()} | ALL RIGHTS RESERVED |{" "}
        <span className="text-warning">INDIA PLY</span> DESIGNED BY{" "}
        <span className="text-warning">DIGITAL JUGGLERS</span>
      </div>

      {/* Enquire Now Button */}
      <div className="enquire-now-btn">Enquire Now</div>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/919799999999"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp size={28} />
      </a>
    </footer>
  );
};

export default Footer;
