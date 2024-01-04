import React from "react";
import "./App.css";
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
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
