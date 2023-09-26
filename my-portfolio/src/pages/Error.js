import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-div">
      <div className="error-div-content">
        <p className="error-number">error:404</p>
        <p className="error-text">
        Désolé. À moins que vous ayez une machine à voyager dans le temps, ce contenu n'est pas disponible.
        </p>
      </div>
      <Link to="/" className="error-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default Error;
