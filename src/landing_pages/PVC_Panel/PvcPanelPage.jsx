import React from 'react';
import Hero from './Hero'
import LeftImage from './LeftImage';
import WallPanel from './WallPanel';
import Trends from './Trends';
import TableChart from './TableChart';
import RightImage from './RightImage';
import './PvcPanel.css'
import TrustedBrand from './TrustedBrand';

function PvcPanelPage() {
    return ( 
    <><Hero title="PVC Wall Panels for Interior Decoration"
        backgroundImage="media/images/unsplash10.avif" />
        <LeftImage />
        <WallPanel/>
        <Trends/>
        <TableChart/>
        <RightImage/>
        <TrustedBrand/>
        </>
     );
}

export default PvcPanelPage;