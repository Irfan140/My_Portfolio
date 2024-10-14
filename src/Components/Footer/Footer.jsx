import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            I'm a 2nd-year IT student at Haldia Institute of Technology.
            Passionate about coding, ethical hacking
          </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user} alt="" />
                <input type="email" placeholder="Enter your email" />
            </div>
            <div className="footer-subscribe">
                Subscribe
            </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
        © 2023 Irfan Mehmud. All rights reserved.
        </p>
        <div className="footer-bottom-right">
            <p>Terms of services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
