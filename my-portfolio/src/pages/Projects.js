import React from "react";
import "../styles/Projects.css";
import Booki from "../assets/images/projets/booki.webp";
import Ohmyfood from "../assets/images/projets/Ohmyfood.webp";
import Kasa from "../assets/images/projets/kasa.webp";
import events from "../assets/images/projets/77events.webp";
import logo_html from "../assets/icons/Skills/html.webp";
import logo_css from "../assets/icons/Skills/css.webp";
import logo_sass from "../assets/icons/Skills/sass.webp";
import logo_javascript from "../assets/icons/Skills/javascript.webp";
import logo_react from "../assets/icons/Skills/react.webp";

const Projects = () => {
  return (
    <div className="projects-div">
      <div className="information-project">
        <p>Vous retrouverez ici quelque un de mes projets.</p>
      </div>
      <div className="card-container">
        <div className="card">
          <h3 className="card-title">BOOKI</h3>
          <p className="card-info">
            Site fictif réalisez avec OpenClassRoom <br />
            Location logement à Marseille pour les vacances
          </p>
          <img className="card-img" src={Booki} alt="Site Booki" />
          <div className="card-skill">
            <img src={logo_html} alt="HTML" />
            <img src={logo_css} alt="CSS" />
          </div>
          <div className="button-selector">
            <a href="https://github.com/Aelbus/BOOKI" className="button-a">
              Voir Code
            </a>
            <a href="https://aelbus.github.io/BOOKI/" className="button-a">
              Pages
            </a>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">KASA</h3>
          <p className="card-info">
            Site fictif réalisez avec OpenClassRoom <br />
            Location de logement
          </p>
          <img className="card-img" src={Kasa} alt="Site Kasa" />
          <div className="card-skill">
            <img src={logo_html} alt="HTML" />
            <img src={logo_css} alt="CSS" />
            <img src={logo_sass} alt="SASS" />
            <img src={logo_javascript} alt="JavaScript" />
            <img src={logo_react} alt="REACT" />
          </div>
          <div className="button-selector">
            <a href="https://github.com/Aelbus/Kasa" className="button-a">
              Voir Code
            </a>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">OhMyFood</h3>
          <p className="card-info">
            Site fictif réalisez avec OpenClassRoom <br />
            Commande de nourriture en ligne
          </p>
          <img className="card-img" src={Ohmyfood} alt="Site OhMyFood" />
          <div className="card-skill">
            <img src={logo_html} alt="HTML" />
            <img src={logo_css} alt="CSS" />
            <img src={logo_sass} alt="SASS" />
          </div>
          <div className="button-selector">
            <a href="https://github.com/Aelbus/OhMyFood" className="button-a">
              Voir Code
            </a>
            <a href="https://aelbus.github.io/OhMyFood/" className="button-a">
              Pages
            </a>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">77Events</h3>
          <p className="card-info">
            Site fictif réalisez avec OpenClassRoom
            <br />
            Calendrier evenementiel
          </p>
          <img className="card-img" src={events} alt="Site 77Events" />
          <div className="card-skill">
            <img src={logo_html} alt="HTML" />
            <img src={logo_css} alt="CSS" />
            <img src={logo_sass} alt="SASS" />
            <img src={logo_javascript} alt="JavaScript" />
            <img src={logo_react} alt="REACT" />
          </div>
          <div className="button-selector">
            <a href="https://github.com/Aelbus/77Events" className="button-a">
              Voir Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
