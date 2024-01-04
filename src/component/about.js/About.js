import React from "react";
import "./about.css";
const About = () => {
  return (
    <div id="about-section" className="about-container p-0 m-0 ">
      <p className="text-white text-4xl mt-20 font-bold">About Me</p>
      <p className="text-white p-20 mt-10 text-xl">
        As a front-end developer, I specialize in translating innovative ideas
        into visually appealing and user-friendly web applications. My expertise
        in HTML, CSS, and JavaScript allows me to create robust and responsive
        websites.
      </p>
      <button className="about-btn "> Know Me More </button>
    </div>
  );
};

export default About;
