import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>Connect with me on social media!</p>
        <div style={socialIconsStyle}>
          <a
            href="https://github.com/Irfan140"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/irfan-mehmud-7a409b280/"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://x.com/MehmudIrfan"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/_irfan_140_/"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/irfan.mehmud.77715"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          
        </div>
        <p>&copy; 2024 Irfan. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Footer styles
const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px 0",
  textAlign: "center",
};

const containerStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
};

const socialIconsStyle = {
  display: "flex",
  justifyContent: "center",
  margin: "20px 0",
};

// Social icons hover effect with gloss
const iconStyle = {
  color: "#fff",
  margin: "0 15px",
  transition: "transform 0.3s, color 0.3s, box-shadow 0.3s",
};

const iconHoverStyle = {
  transform: "scale(1.2)",
  color: "#DF8908", // Your gradient colors for hover effect
  boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.6)", // Glossy effect
};

export default Footer;
