import React from "react";
import "../styles/components/header.css";
import { NavLink } from "react-router-dom";
import logoAEL from "../assets/images/Logo.webp";

const Header = () => {
  return (
    <header className="header-div">
      <div className="logo-div">
        <img src={logoAEL} alt="Logo Ael/Aelbus/Clément B."></img>
      </div>
      <nav className="nav-div">
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
    </header>
  );
};
export default Header;
