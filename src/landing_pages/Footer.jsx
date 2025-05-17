import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container text-white p-4">
      <div className="container">
        <div className="row">
          {/* Left Section: Logo, Address, and Contact */}
          <div className="col-md-5 mb-4 d-flex justify-content-between">
            <div>
              <div className="mb-3 d-flex align-items-center">
                {/* Add your logo here - replace 'logo.png' with your actual logo path */}
                <div className="logo-container">
                  <div className="logo-text">
                    <div className="brand-name">India</div>
                    <div className="tagline">PLY</div>
                    <div className="sub-text">Aber Tom Giot Papavol</div>
                  </div>
                </div>
              </div>
              <p className="small mb-2">
                PG Rd, opposite Sadar Hospital,
                <br />
                Jehanabad, Bihar 804408
                <br />
              </p>
              <p className="small mb-2">
                <strong>Office:</strong> +91 8271167719
              </p>
             

              <p className="small mb-2">
                <strong>info@indiaply.com</strong>
              </p>
              {/* Social Media Icons */}
              <div className="social-icons mt-3">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="main-logo">
              <img
                src="/media/images/logo.png"
                alt="India Ply Logo"
                className="logo-image"
                style={{ width: "80px", height: "80px" }}
              />
            </div>
          </div>

          {/* Right Section: Map Image */}
          <div className="col-md-7">
            <div className="map-container">
              <a
                href="https://maps.app.goo.gl/7MMgb19MDmq9Va979?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="media/images/location.png"
                  style={{ width: "100%", height: "auto" }}
                  alt="Map showing location"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="footer-bottom">
        <p className="mb-0">
          © COPYRIGHT {new Date().getFullYear()} | ALL RIGHTS RESERVED |{" "}
          <span className="text-orange">INDIA PLY</span> DESIGNED BY{" "}
          <span className="text-orange">ALPHA MEDIA</span>
        </p>
      </div>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/918271167719"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp style={{ fontSize: "28px" }} />
      </a>
    </footer>
  );
};

export default Footer;
