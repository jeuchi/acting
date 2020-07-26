import React from "react";
import "./Talks.css";
import { talkSection } from "../../portfolio";
import { Fade } from "react-reveal";
import ImageGallery from 'react-image-gallery';


export default function Talks() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="talks">
      <div className="talk-header">
        <h1 className="talk-header-title">{talkSection.title}</h1>
        <p className="subTitle talk-header-subtitle">{talkSection.subtitle}</p>
        <div className="talk-cards-div">
            <ImageGallery items={talkSection.talks} />
        </div>
      </div>
    </div>
    </Fade>
  );
}
