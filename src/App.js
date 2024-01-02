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
import "./App.css";
const App = () => {
  return (
    <>
      <div className="fullpageAnim primary-background">
        <section className="page">
          <Home />
        </section>
        <section className="page">
          <About />
        </section>
        <section className="page">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default App;
