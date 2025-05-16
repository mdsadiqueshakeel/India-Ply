import React from 'react';
import Hero from './Hero';
import Corina from './Corian'; // or Plywood if that's the actual filename
import CharcoalPanel from './CharcoalPanel';
import WoodenFloor from './WoodenFloor';
import LeminateDoor from './LeminateDoor';
import AlaBala from './AlaBala';
import Terra from './Terra';
import Stone from './Stone';
import Hpl from './Hpl';
import Metal from './Metal';
import ProductsImg from './ProductsImg';

function DecorativesPage() {
  return (
    <>
      <Hero
        title="DECORATIVES - PLYWOOD DEALERS IN JEHANABAD"
        backgroundImage="https://images.unsplash.com/photo-1646245939072-cdfc7d783b05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Corina />
      <CharcoalPanel />
      <WoodenFloor/>
      <LeminateDoor/>
      <AlaBala/>
      <Terra/>
      <Stone/>
      <Hpl/>
      <Metal/>
      <ProductsImg/>
    </>
  );
}

export default DecorativesPage;
