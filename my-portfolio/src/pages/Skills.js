import React from "react";
import "../styles/pages/Skills.css";
import logo_css from "../assets/icons/Skills/css.webp";
import logo_github from "../assets/icons/Skills/github.webp";
import logo_html from "../assets/icons/Skills/html.webp";
import logo_javascript from "../assets/icons/Skills/javascript.webp";
import logo_react from "../assets/icons/Skills/react.webp";
import logo_redux from "../assets/icons/Skills/redux.webp";
import logo_sass from "../assets/icons/Skills/sass.webp";
import logo_swagger from "../assets/icons/Skills/swagger.webp";
import logo_reason from "../assets/icons/Skills/reason.webp";
import logo_evernote from "../assets/icons/Skills/Evernote.webp";
import logo_twitch from "../assets/icons/Skills/twitch.webp";
import logo_obs from "../assets/icons/Skills/obs.webp";
import logo_photoshop from "../assets/icons/Skills/photoshop.webp";
import logo_aftereffect from "../assets/icons/Skills/aftereffect.webp";

const Skills = () => {
  return (
    <div className="skills-div">
      <p>My Skills</p>
      <div className="skill-container">
        <div className="dev">
          <p className="title-dev"> Developpement et code</p>
          <div className="dev-skill">
            <img src={logo_html} alt="HTML" />
            Html5
          </div>
          <div className="dev-skill">
            <img src={logo_css} alt="CSS" />
            Css
          </div>
          <div className="dev-skill">
            <img src={logo_sass} alt="SASS" />
            Sass
          </div>
          <div className="dev-skill">
            <img src={logo_javascript} alt="JavaScript" />
            JavaScript
          </div>
          <div className="dev-skill">
            <img src={logo_react} alt="REACT" />
            React
          </div>
          <div className="dev-skill">
            <img src={logo_redux} alt="REDUX" />
            Redux
          </div>
          <div className="dev-skill">
            <img src={logo_github} alt="GitHub" />
            GitHub
          </div>
          <div className="dev-skill">
            <img src={logo_swagger} alt="Swagger" />
            Swagger
          </div>
        </div>
        <div className="other">
          <p className="title-other"> Divers</p>
          <div className="other-skill">
            <img src={logo_reason} alt="Reason10" />
            Reason10
          </div>
          <div className="other-skill">
            <img src={logo_evernote} alt="Evernote" />
            Evernote
          </div>
          <div className="other-skill">
            <img src={logo_twitch} alt="Twitch" />
            Twitch
          </div>
          <div className="other-skill">
            <img src={logo_obs} alt="OBS" />
            OBS Studio
          </div>
          <div className="other-skill">
            <img src={logo_photoshop} alt="Adobe Photoshop" />
            Photoshop
          </div>
          <div className="other-skill">
            <img src={logo_aftereffect} alt="Adobe After Effect" />
            After Effect
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
