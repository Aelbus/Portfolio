import React from "react";
import "../styles/header.css";
import { NavLink } from "react-router-dom";
import logoAEL from "../assets/images/Logo.webp"

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
      </div>
    </div>
  );
};
export default Header;
