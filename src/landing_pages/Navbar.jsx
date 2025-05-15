import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Top Bar with Logo, Call Us, and Social Icons */}
      <div className="top-bar">
        <div className="container mx-auto px-4">
          <div className="top-bar-content flex justify-between items-center flex-wrap">
            {/* Logo and Text */}
            <div className="logo-container flex items-center gap-3">
              <img 
                src="/media/images/logo.png" 
                alt="India Ply Logo" 
                className="logo-image"
              />
              <div className="logo-text">
                <div className="brand-name">India</div>
                <div className="tagline">PLY</div>
                <div className="sub-text">Aber Tom Giot Papavol</div>
              </div>
            </div>

            {/* Right-aligned elements */}
            <div className="right-section flex items-center gap-6 md:gap-8">
              {/* Call Us */}
              <div className="call-us text-right md:text-left">
                <span className="call-text block">Call Us</span>
                <span className="phone-number">+91 8271167719</span>
              </div>
              
              {/* Social Icons */}
              <div className="social-icons flex gap-3">
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
        <div className="container mx-auto px-4">
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-full justify-between">
              {['HOME', 'ABOUT US', 'PRODUCTS', 'DECORATIVES', 'PVC PANEL', 'OUR BRANDS', 'GALLERY', 'CONTACT US'].map((item) => (
                <li className="nav-item" key={item}>
                  <Link 
                    className="nav-link" 
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
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