import React from "react";
import "../styles/background.css";
import VidBG from "../assets/mov/BG.mp4";

const background = () => {
  return (
    <div className="bloc">
      <video autoplay="autoplay" muted="" loop="infinite" src={VidBG}></video>
    </div>
  );
};

export default background;
