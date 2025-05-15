import React from 'react';
import Hero from './Hero';
import RightImage from './RightImage';
import Founder from './Founder';
import ProductsDeal from './ProductsDeal';
import Vision from './Vision';



function AboutPage() {
    return ( <>
    <Hero   title="About Us"
  backgroundImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <RightImage/>
    <Founder/>
    <ProductsDeal/>
    <Vision/>
    </> );
}

export default AboutPage;