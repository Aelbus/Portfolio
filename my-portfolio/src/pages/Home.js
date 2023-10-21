import React from "react";
import "../styles/Home.css";
import PictureProfil from "../assets/images/photos/ProfilPicture.webp";

const Home = () => {
  return (
    <div className="home-div">
      <div className="home-info">
        <h1>Porfolio</h1>
        <h3>
          Bienvenue <br />
          dans mon univers. <br />
          <br />
          Bonne découverte !
        </h3>
        <p>N'hésitez pas à prendre contact avec moi.</p>
      </div>
      <div className="home-ael">
        <div className="home-img">
          <img className="home-pp" src={PictureProfil} alt="Photo AeLBuS" />
        </div>
        <div className="home-link">
          <a>Télécharger CV</a>
        </div>
      </div>
    </div>
  );
};
export default Home;
