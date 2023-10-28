import React from "react";
import "../styles//pages/Home.css";
import PictureProfil from "../assets/images/photos/ProfilPicture.webp";
import CV from "../assets/files/CV.pdf";
const Home = () => {
  return (
    <div className="home-div">
      <div className="home-info">
        <h1>Portfolio</h1>
        <h2>
          Bienvenue <br />
          dans mon univers. <br />
          <br />
          Bonne découverte !
        </h2>
        <ul>
          <li>Name : Clément </li>
          <li>Pseudo : AeLBuS, AeLProD </li>
          <li>Birth Year : 1990 </li>
          <li>Birth Month: Décembre</li>
          <li>Hobbies : Developpement, Jeux Vidéo, Streaming, Musique</li>
        </ul>
        <p>N'hésitez pas à prendre contact avec moi.</p>
      </div>

      <div className="home-ael">
        <div className="home-img">
          <img className="home-pp" src={PictureProfil} alt="Photo AeLBuS" />
        </div>
        <div className="home-link">
          <a href={CV} target="_blank" rel="noreferrer">
            Télécharger CV
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
