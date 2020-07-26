import React from "react";
import "./Reels.css";
import { reelsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import ReactPlayer from "react-player"

export default function Reels() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="reels">
      <div className="reels-header">
        <h1 className="reels-header-title">{reelsSection.title}</h1>
        <p className="subTitle reels-header-subtitle">{reelsSection.subtitle}</p>
      </div>
      <div className="reels-main-div">
        {reelsSection.reels.map(reelsLink => {
          return (
            <div>
          <ReactPlayer
            url= {reelsLink}
          />
        </div>
 
          );
        })}
      </div>
    </div>
    </Fade>
  );
}
