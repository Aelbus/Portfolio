import React from "react";
import "../styles/Projects.css";
import Booki from "../assets/images/projets/booki.webp";

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
          <img className="card-img" src="#" alt="Site Kasa" />
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
          <img className="card-img" src="#" alt="Site OhMyFood" />
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
          <img className="card-img" src="#" alt="Site 77Events" />
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
