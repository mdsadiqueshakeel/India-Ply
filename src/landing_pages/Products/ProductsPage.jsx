import React from 'react';
import Hero from './Hero';
import Plywood from './PlyWood';
import HardWare from './HardWare';
import HDHMR from './HDHMR';
import Locks from './Locks';
import DecorativeHandles from './DecorativesHandle';
import Laminates from './Laminates';
import DecoratoveProducts from './DecorativeProducts';
import Veener from './Veener';
import Tape from './Tape';
import GLImages from './GlImages';

function ProductPage() {
    return ( <>
    <Hero   title="PRODUCTS WE DEAL IN"
  backgroundImage="media/images/unsplash9.avif"/>

    <Plywood/>
    <HardWare/>
    <HDHMR/>
    <GLImages/>
    <Locks/>
    <DecorativeHandles/>
    <Laminates/>
    <DecoratoveProducts/>
    <Veener/>
    <Tape/>
    </> );
}

export default ProductPage;