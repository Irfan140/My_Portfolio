// src/components/MyWork/MyWork.js

import React from "react";
import "./MyWork.css";
import about_img from "../../assets/about_img.svg";
import mywork_data from "../../assets/mywork_data";
import arrow from "../../assets/arrow.svg";

function MyWork() {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={about_img} alt="About My Work" />
      </div>

      <div className="mywork-container">
        {mywork_data.length > 0 ? (
          mywork_data.map((work) => (
            <div key={work.w_no} className="mywork-item">
              <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                <img src={work.w_img} alt={work.w_name} loading="lazy" />
              </a>
              <p>{work.w_name}</p>
            </div>
          ))
        ) : (
          <p>No work to display right now!</p>
        )}
      </div>

      <div className="mywork-showmore">
        <a href="https://github.com/Irfan140/Mini-projects" target="_blank" rel="noopener noreferrer">
          Show More
        </a>
        <img src={arrow} alt="Show More Arrow" />
      </div>
    </div>
  );
}

export default MyWork;
