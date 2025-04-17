import React from "react";
import "./About.css";
import about_img from "../../assets/about_img.svg";
import img from "../../assets/img.jpeg";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={about_img} alt="decorative" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={img} alt="portrait" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              👨‍🎓 <strong>Education:</strong>
              <br />
              B.Tech (2nd Year) in Information Technology at Haldia Institute of
              Technology.
              <br />
              Passionate about coding and solving problems.
              <br />
              <br />
              💻 <strong>Skills:</strong>
            </p>
          </div>

          <div className="about-skills">
            <span className="skill-badge">HTML &amp; CSS</span>
            <span className="skill-badge">Tailwind CSS</span>
            <span className="skill-badge">React JS</span>
            <span className="skill-badge">Node JS</span>
            <span className="skill-badge">Express JS</span>
            <span className="skill-badge">MongoDB</span>
            <span className="skill-badge">JavaScript</span>
            <span className="skill-badge">Kali Linux</span>
            <span className="skill-badge">Flask</span>
            <span className="skill-badge">C</span>
            <span className="skill-badge">C++</span>
            <span className="skill-badge">Python</span>
            <span className="skill-badge">Git</span>
            <span className="skill-badge">Postman</span>
            <span className="skill-badge">Statistics</span>
            <span className="skill-badge">
              Data Cleaning &amp; Visualization 
            </span>
            <span className="skill-badge">ML</span>
            <span className="skill-badge">NLP</span>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>200+</h1>
          <p>Leetcode Problems Solved</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Projects made</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Top 35</h1>
          <p>In a hackathon (out of 350+ teams)</p>
        </div>
      </div>
    </div>
  );
}

export default About;
