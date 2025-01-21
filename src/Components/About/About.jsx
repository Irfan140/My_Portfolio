import React from "react";
import "./About.css";
import about_img from "../../assets/about_img.svg";
import img from "../../assets/img.jpeg";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={about_img} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              👨‍🎓 Education
              <br />
              Second-year B.Tech student in Information Technology at Haldia
              Institute of Technology, passionate about coding, and
              problem-solving.
              <br />
              <br />
              💻 Skills
              <br />
              Proficient in C, C++, Python, and JavaScript, with hands-on
              experience in building web apps using HTML, CSS, Tailwind CSS,
              React.js, Node.js, Express.js, and MongoDB. Solved 200+ LeetCode
              problems and skilled in Git, GitHub, and basic Kali Linux OS.
              <br />
              <br />
              📊 Focus
              <br />
              Currently learning Data Science with Krish Naik's Udemy course and
              exploring Artificial Intelligence.
              <br />
              <br />
              ♟️ Hobbies
              <br />
              Chess enthusiast, honing strategic thinking and problem-solving.
              <br />
              <br />
              🌟 Goals
              <br />
              To enhance technical skills, build impactful solutions, and
              collaborate on innovative projects.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind CSS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Mongo DB</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Kali Linux</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Git and Github</p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>ML</p> <hr style={{ width: "30%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Solved 200+ </h1>
          <p>Leetcode Problems</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Made 15+</h1>
          <p>Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Selected</h1>
          <p>For SIH 24 (internal round)</p>
        </div>
      </div>
    </div>
  );
}

export default About;
