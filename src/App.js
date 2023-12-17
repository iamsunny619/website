import React from "react";
import { Route, Routes } from "react-router";
import About from "./page/about/About";
import Home from "./page/home/Home";
import Contact from "./page/contact/Contact";
import Project from "./page/project/Project";
import Resume from "./page/resume/Resume";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
