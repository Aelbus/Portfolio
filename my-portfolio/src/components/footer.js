import React from "react";
import "../styles/components/footer.css";
import insta from "../assets/icons/Reseau/Insta.webp";
import soundcloud from "../assets/icons/Reseau/Soundcloud.webp";
import github from "../assets/icons/Reseau/GitHub.webp";
import linkedin from "../assets/icons/Reseau/linkedin.webp";

const footer = () => {
  return (
    <footer className="footer-div">
      <div className="Social-media">
        <a href="https://github.com/Aelbus" target="_blank" rel="noreferrer">
          <img src={github} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/aelprod/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://soundcloud.com/aelbus"
          target="_blank"
          rel="noreferrer"
        >
          <img src={soundcloud} alt="soundcloud" />
        </a>
        <a
          href="https://www.instagram.com/aelbuslive/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="Instagram" />
        </a>
      </div>
      <p>© 2023 AelbusProd All rights reserved</p>
    </footer>
  );
};

export default footer;
