import React from 'react';
import Hero from './Hero'
import LeftImage from './LeftImage';
import RightImage from './RightImage';
import HappyClients from './HappyClinets';
import Partners from './Partners';
import AnotherLeftImage from './AnotherLeftImage';
import OurGallery from './OurGallery';
import './HomePage.css';

function HomePage() {
    return ( <>
        <Hero/>
        <RightImage/>
        <LeftImage/>
        <AnotherLeftImage/>  
        <OurGallery/> 
    <HappyClients/>
        <Partners/>
    </> );
}

export default HomePage;