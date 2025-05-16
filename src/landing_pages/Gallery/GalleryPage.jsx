import React from 'react';
import Hero from './Hero';
import Images from './RenderImages';

function GalleryPage() {
    return (<>
        <Hero   title="GALLERY"
  backgroundImage="https://images.unsplash.com/photo-1507643179773-3e975d7ac515?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Images/>
    </> );
}

export default GalleryPage;