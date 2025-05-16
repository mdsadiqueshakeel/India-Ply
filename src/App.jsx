import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './landing_pages/Footer';
import Navbar from './landing_pages/Navbar';
import NotFound from './landing_pages/NotFound';

import AOS from "aos";
import "aos/dist/aos.css";
import About from './landing_pages/About/AboutPage';
import Decoratives from './landing_pages/Decoratives/DecorativesPage';
import Gallery from './landing_pages/Gallery/GalleryPage';
import Home from './landing_pages/Home/HomePage';
import OurBrands from './landing_pages/OurBrands/OurBrandsPage';
import Products from './landing_pages/Products/ProductsPage';
import PVCPanel from './landing_pages/PVC_Panel/PvcPanelPage';




const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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
