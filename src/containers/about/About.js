import React from "react";
import "./About.css";
import { aboutSection } from "../../portfolio";
import {Fade} from "react-reveal";

export default function About() {
  return (
    <div className="main" id="about">
      <div className="about-main-div">
        <Fade left duration={1000}>
        <div className="about-image-div">
          <img alt="Jeremy About Picture" src={require("../../assets/images/manOnTable.svg")}></img>
        </div>
        </Fade>
        <Fade right duration={1000}>
        <div className="about-text-div">
          <h1 className="about-heading">{aboutSection.title} </h1>
          <p className="subTitle about-text-subtitle">{aboutSection.subTitle}</p>
          <p className="subTitle about-text-subtitle">{aboutSection.text}</p>
          
        </div>
        </Fade>
      </div>
    </div>
  );
}
