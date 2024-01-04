import React from "react";
import "./hero.css";
import backgroundVid from "../../assest/video/backgroundVid.mp4";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-t from-black via-black/10 to-transparent m-0 p-0">
      <div className="relative bg-black/70 w-screen h-screen bg-gradient-to-r from-black via-black/90 to-transparent m-0">
        <video
          className="object-fill mix-blend-overlay w-full h-full absolute"
          autoPlay
          loop
          muted
        >
          <source src={backgroundVid} type="video/mp4" />
        </video>
        <div className="text-white w-screen h-full flex flex-col justify-center pl-20 pr-20 pb-10 z-100">
          <p className="text-3xl font-bold">Hello World!</p>
          <p className="text-3xl font-bold ">
            I am Ankit, a Front end Developer
          </p>
          <p className="text-3xl font-bold">I make Complex Simple</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
