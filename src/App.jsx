import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './landing_pages/Navbar'
import Footer from './landing_pages/Footer';
import NotFound from './landing_pages/NotFound';

import Home from './landing_pages/Home/HomePage';
import About from './landing_pages/About/AboutPage';
import Gallery from './landing_pages/Gallery/GalleryPage';
import Products from './landing_pages/Products/ProductsPage';
import OurBrands from './landing_pages/OurBrands/OurBrandsPage';
import PVCPanel from './landing_pages/PVC_Panel/PvcPanelPage';
import Decoratives from './landing_pages/Decoratives/DecorativesPage';


const App = () => {
  return (
    <>
      <Navbar />
      <div className="main-content" style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/products" element={<Products />} />
          <Route path="/our-brands" element={<OurBrands />} />
          <Route path="/pvc-panel" element={<PVCPanel />} />
          <Route path="/decoratives" element={<Decoratives />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
