import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Top Bar with Logo, Call Us, and Social Icons */}
      <div className="top-bar">
        <div className="container py-2">
          <div className="top-bar-content container-fluid d-flex justify-content-between align-items-center flex-wrap">
            {/* Logo and Text */}
            <div className="logo-container d-flex align-items-center gap-2">
                <Link to="/">
              <img
                src="/media/images/logo.png"
                alt="India Ply Logo"
                className="logo-image"
                style={{ width: "80px", height: "80px" }}
              />
               </Link>
              <div
                className="logo-text"
                style={{ fontSize: "12px", lineHeight: "1.2" }}
              >
                <div className="brand-name">India</div>
                <div className="tagline">PLY</div>
                <div className="sub-text" style={{ fontSize: "10px" }}>
                  Aber Tom Giot Papavol
                </div>
              </div>
            </div>

            {/* Right-aligned elements */}
            <div className="right-section d-flex flex-column align-items-center gap-4">
              {/* Call Us */}
              <div className="text-center d-flex flex-column align-items-center call-us-section">
                <span className="fw-semibold">Call Us</span>
                <span className="phone-number">+91 8271167719</span>
              </div>

              {/* Social Icons */}
              <div className="d-flex gap-3 social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav navbar navbar-expand-lg">
        <div className="container-fluid mx-auto px-4 d-flex justify-content-between align-items-center w-100">
          {/* Logo visible only on small screens */}
          <Link to="/" className="navbar-brand m-0 logo-img">
            <img
              src="/media/images/logo.png"
              alt="Logo"
              style={{ height: "70px" }}
            />
          </Link>

          {/* Toggler Button on Right */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Nav Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 justify-between text-center text-lg-start">
              {[
                "HOME",
                "ABOUT US",
                "PRODUCTS",
                "DECORATIVES",
                "PVC PANEL",
                "OUR BRANDS",
                "GALLERY",
                "CONTACT US",
              ].map((item) => (
                <li className="nav-item" key={item}>
                  <Link
                    className="nav-link"
                    to={
                      item === "HOME"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    onClick={() => {
                      const navbar = document.getElementById("navbarNav");
                      if (navbar.classList.contains("show")) {
                        new window.bootstrap.Collapse(navbar).hide();
                      }
                    }}
                  >
                    {item}
                    <span className="nav-hover-effect"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
