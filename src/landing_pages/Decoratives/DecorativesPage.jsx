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
        backgroundImage="media/images/unsplash5.avif"
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
