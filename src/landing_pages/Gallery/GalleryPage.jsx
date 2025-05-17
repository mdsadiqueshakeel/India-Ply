import React from 'react';
import Hero from './Hero';
import Images from './RenderImages';
import "./Gallery.css"

const imageList =[
    "/media/images/R2.png",
    "/media/images/R1.png",
    "/media/images/R3.png",
    "/media/images/R4.png",
    "/media/images/R5.png",
    "/media/images/R7.png",
    "/media/images/R8.png",
    "/media/images/img1.webp",
    "/media/images/img2.webp",
    "/media/images/img3.webp",
    "/media/images/img4.webp",
    "/media/images/img5.webp",
    "/media/images/img7.webp",
    "/media/images/img8.webp",
    "/media/images/img9.webp",
    "/media/images/img10.webp",
    "/media/images/img12.webp",
    "/media/images/img1.webp",
    "/media/images/gl1.png",
    "/media/images/gl2.png",
    "/media/images/gl3.png",
    "/media/images/gl4.png",
    "/media/images/gl5.png",
    "/media/images/gl6.png",
    "/media/images/gl7.png",
    "/media/images/gl8.png",
    "/media/images/d3.webp",
];

function GalleryPage() {
    return (<>
        <Hero   title="GALLERY"
  backgroundImage="media/images/unsplash6.avif"/>
        <Images images={imageList} />
    </> );
}

export default GalleryPage;