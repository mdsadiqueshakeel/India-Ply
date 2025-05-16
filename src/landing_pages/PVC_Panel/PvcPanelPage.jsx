import React from 'react';
import Hero from './Hero'
import LeftImage from './LeftImage';
import WallPanel from './WallPanel';

function PvcPanelPage() {
    return ( 
    <><Hero title="PVC Wall Panels for Interior Decoration"
        backgroundImage="https://plus.unsplash.com/premium_photo-1675719068406-5c6f6e6113aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <LeftImage />
        <WallPanel/>
        </>
     );
}

export default PvcPanelPage;