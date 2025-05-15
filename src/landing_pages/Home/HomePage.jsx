import React from 'react';
import Hero from './Hero'
import LeftImage from './LeftImage';
import RightImage from './RightImage';
import HappyClients from './HappyClinets';
import Partners from './Partners';

function HomePage() {
    return ( <>
        <Hero/>
        <RightImage/>
        <LeftImage/>
        <LeftImage/>
        <HappyClients/>
        <Partners/>
    </> );
}

export default HomePage;