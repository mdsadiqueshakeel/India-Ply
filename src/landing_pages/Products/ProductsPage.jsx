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
  backgroundImage="https://images.unsplash.com/photo-1693722232769-74b150f0857a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

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