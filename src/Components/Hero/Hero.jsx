import React from "react";
import "./Hero.css";
import img from "../../assets/img.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="hero" className="hero">
      <img src={img} alt="" />
      <h1>
        <span>I'm Irfan Mehmud,</span> Web Developer from India
      </h1>
      <p>
        2nd-year IT student at Haldia Institute of Technology. Skilled in Web Technologies,Data Cleaning, Statistics, ML
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume"><a href="https://drive.google.com/file/d/1dEp6nGI8WvLkSV2psmKu0r1LzY8u0Ikv/view?usp=sharing" target="_blanck">Resume</a></div>
      </div>
    </div>
  );
}

export default Hero;
