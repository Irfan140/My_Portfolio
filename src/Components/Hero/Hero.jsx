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
        2nd-year IT student at Haldia Institute of Technology. Passionate about
        coding, ethical hacking, and experienced in HTML, CSS, JavaScript,
        React, and Node.js. Enjoys chess and exploring cybersecurity
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
