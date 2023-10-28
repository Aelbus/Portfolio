import React from "react";
import "../styles/components/header.css";
import { NavLink } from "react-router-dom";
import logoAEL from "../assets/images/Logo.webp";
import insta from "../assets/icons/Reseau/Insta.webp";
import soundcloud from "../assets/icons/Reseau/Soundcloud.webp";
import github from "../assets/icons/Reseau/GitHub.webp";
import linkedin from "../assets/icons/Reseau/linkedin.webp";

const Header = () => {
  return (
    <div className="header-div">
      <div className="logo-div">
        <img src={logoAEL} alt="Logo Ael/Aelbus/Clément B."></img>
      </div>
      <div className="nav-div">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? "nav-link active-link" : "nav-link";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) => {
                  return isActive ? "nav-link active-link" : "nav-link";
                }}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => {
                  return isActive ? "nav-link active-link" : "nav-link";
                }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive ? "nav-link active-link" : "nav-link";
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="Social-media">
          <a href="https://github.com/Aelbus" target="_blank" rel="noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/cl%C3%A9ment-b-997833266/"
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
      </div>
    </div>
  );
};
export default Header;
