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
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Contact
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
