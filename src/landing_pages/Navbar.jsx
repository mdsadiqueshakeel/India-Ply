import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Top Bar with Logo, Call Us, and Social Icons */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            {/* Logo */}
            <div className="logo">
              <div className="logo-text">
                <div className="brand-name">India</div>
                <div className="tagline">PLY</div>
                <div className="sub-text">Aber Tom Giot Papavol</div>
              </div>
            </div>
            
            {/* Call Us and Social Icons */}
            <div className="contact-section">
              <div className="call-us">
                <span>Call Us</span>
                <span className="phone-number">+91 8271167719</span>
              </div>
              <div className="social-icons">
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
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {['HOME', 'ABOUT US', 'PRODUCTS', 'DECORATIVES', 'PVC PANEL', 'OUR BRANDS', 'GALLERY', ].map((item) => (
                <li className="nav-item" key={item}>
                  <Link 

                    className="nav-link" 
                    to={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
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