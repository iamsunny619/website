import React from "react";
import { Route, Routes } from "react-router";
import About from "./page/about/About";
import Home from "./page/home/Home";
import Contact from "./page/contact/Contact";
import Project from "./page/project/Project";
import Resume from "./page/resume/Resume";
import Error from "./page/Error";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
