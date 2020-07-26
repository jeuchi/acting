import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import About from "./about/About";
import Reels from "./reels/Reels";
import Gallery from "./gallery/Gallery";
import Profile from "./profile/Profile";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <About />
        <Reels />
        <Gallery />
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}
