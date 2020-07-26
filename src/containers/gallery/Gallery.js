import React from "react";
import "./Gallery.css";
import { gallerySection } from "../../portfolio";
import { Fade } from "react-reveal";
import ImageGallery from 'react-image-gallery';

import SimpleImageSlider from "react-simple-image-slider";

export default function Gallery() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="gallery">
      <div className="gallery-header">
        <h1 className="gallery-header-title">{gallerySection.title}</h1>
        <p className="subTitle gallery-header-subtitle">{gallerySection.subtitle}</p>
        <div className="gallery-cards-div">
             <SimpleImageSlider
                    width={896}
                    height={504}
                    images={gallerySection.images}
                    navStyle={2}
                    onCompleteSlide={0}
                />
        </div>
      </div>
    </div>
    </Fade>
  );
}
