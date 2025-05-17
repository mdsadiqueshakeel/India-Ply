import React from 'react';
import Hero from './Hero';
import RightImage from './RightImage';
import Founder from './Founder';
import ProductsDeal from './ProductsDeal';
import Vision from './Vision';
import './AboutPage.css';



function AboutPage() {
    return ( <>
    <Hero   title="About Us"
  backgroundImage="media/images/unsplash1.avif"/>
    <RightImage/>
    <Founder/>
    <ProductsDeal/>
    <Vision/>
    </> );
}

export default AboutPage;