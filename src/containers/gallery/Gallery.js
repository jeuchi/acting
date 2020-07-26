import React from "react";
import "./Gallery.css";
import { gallerySection } from "../../portfolio";
import { Fade } from "react-reveal";
import ImageGallery from 'react-image-gallery';


export default function Talks() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="gallery">
      <div className="gallery-header">
        <h1 className="gallery-header-title">{gallerySection.title}</h1>
        <p className="subTitle gallery-header-subtitle">{gallerySection.subtitle}</p>
        <div className="gallery-cards-div">
            <ImageGallery items={gallerySection.images} />
        </div>
      </div>
    </div>
    </Fade>
  );
}
