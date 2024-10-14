import React from "react";
import "./About.css";
import about_img from "../../assets/about_img.svg"
import img from "../../assets/img.jpeg"

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
              As a 2nd-year B.Tech student at Haldia Institute of Technology
              Major in Information Technology, I am passionate about coding, web
              development, and ethical hacking. With over 150+ solved LeetCode
              problems and hands-on experience in web technologies like HTML,
              CSS, JavaScript, Tailwind CSS, React js, Node.js, Express.js, and
              MongoDB, I am continually refining my skills in Data Structures,
              Algorithms, and backend development. Outside of coding, I love
              playing chess, which sharpens my strategic thinking and
              problem-solving abilities.
              <br /><br />
               I am always eager to learn new skills
              and embrace exciting challenges that foster growth as a developer.
              Ethical hacking is one of my key interests, and I explore this
              field in my free time to develop a better understanding of
              cybersecurity. I thrive on building efficient, user-friendly
              solutions, and I'm constantly seeking opportunities to collaborate
              on innovative projects that push the boundaries of my knowledge
              and skillset.
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
              <p>DSA</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Solved 150+ </h1>
          <p>Leetcode Problems</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Made 15+</h1>
          <p>Projetcs</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Participated</h1>
          <p>In chess tournament</p>
        </div>
      </div>
    </div>
  );
}

export default About;
