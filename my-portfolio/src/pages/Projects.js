import React, { useState } from "react";
import "../styles/pages/Projects.css";
import Booki from "../assets/images/projets/booki.webp";
import Ohmyfood from "../assets/images/projets/Ohmyfood.webp";
import Grandline from "../assets/images/projets/Grandlinegallerietrollesque.webp";
import Kasa from "../assets/images/projets/kasa.webp";
import events from "../assets/images/projets/77events.webp";
import argentbank from "../assets/images/projets/argentbank.webp";
import logo_html from "../assets/icons/Skills/html.webp";
import logo_css from "../assets/icons/Skills/css.webp";
import logo_sass from "../assets/icons/Skills/sass.webp";
import logo_javascript from "../assets/icons/Skills/javascript.webp";
import logo_react from "../assets/icons/Skills/react.webp";
import logo_redux from "../assets/icons/Skills/redux.webp";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const projects = [
    {
      title: "BOOKI",
      info: "Location logement à Marseille pour les vacances",
      image: Booki,
      skills: [logo_html, logo_css],
      codeLink: "https://github.com/Aelbus/BOOKI",
      liveLink: "https://aelbus.github.io/BOOKI/",
    },
    {
      title: "KASA",
      info: "Location de logement",
      image: Kasa,
      skills: [logo_html, logo_css, logo_sass, logo_javascript, logo_react],
      codeLink: "https://github.com/Aelbus/Kasa",
    },
    {
      title: "OhMyFood",
      info: "Commande de nourriture en ligne",
      image: Ohmyfood,
      skills: [logo_html, logo_css, logo_sass],
      codeLink: "https://github.com/Aelbus/OhMyFood",
      liveLink: "https://aelbus.github.io/OhMyFood/",
    },
    {
      title: "77Events",
      info: "Calendrier événementiel",
      image: events,
      skills: [logo_html, logo_css, logo_sass, logo_javascript, logo_react],
      codeLink: "https://github.com/Aelbus/77Events",
    },
    {
      title: "ArgentBank",
      info: "Banque en ligne",
      image: argentbank,
      skills: [
        logo_html,
        logo_css,
        logo_sass,
        logo_javascript,
        logo_react,
        logo_redux,
      ],
      codeLink: "https://github.com/Aelbus/ArgentBanK",
    },
    {
      title: "Grandline Gallerie Trollesque",
      info: "Vitrine serveur RP GTA/Red Dead ",
      image: Grandline,
      skills: [logo_html, logo_css, logo_sass, logo_javascript, logo_react],
      codeLink: "https://github.com/Aelbus/GrandLine-FanSite",
      liveLink: "https://grandline-galerie-trollesque.netlify.app/",
    },
  ];

  const skillsNames = ["HTML", "CSS", "Sass", "JavaScript", "React", "Redux"];

  const changeProject = (direction) => {
    const totalProjects = projects.length;
    if (direction === "next") {
      setCurrentProject((currentProject + 1) % totalProjects);
    } else {
      setCurrentProject((currentProject - 1 + totalProjects) % totalProjects);
    }
  };

  return (
    <main className="projects-div">
      <div className="card-container">
        <div className="card">
          <div className="card-main">
            <div className="card-info">
              <h3>{projects[currentProject].title}</h3>
              <p>{projects[currentProject].info}</p>
              <div className="card-skill">
                {projects[currentProject].skills.map((skill, index) => (
                  <div key={index}>
                    <img src={skill} alt={`Skill ${skillsNames[index]}`} />
                    <p>{skillsNames[index]}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-img">
              <img
                src={projects[currentProject].image}
                alt={`Site ${projects[currentProject].title}`}
              />
            </div>
          </div>
          <div className="button-selector">
            <a
              href={projects[currentProject].codeLink}
              className="button-a"
              target="_blank"
              rel="noreferrer"
            >
              Voir Code
            </a>
            {projects[currentProject].liveLink && (
              <a
                href={projects[currentProject].liveLink}
                className="button-a"
                target="_blank"
                rel="noreferrer"
              >
                Pages
              </a>
            )}
          </div>
        </div>
        <div className="btn-prev-next">
          <button className="btn-text" onClick={() => changeProject("prev")}>
            Précédent
          </button>
          <button className="btn-ico" onClick={() => changeProject("prev")}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="btn-text" onClick={() => changeProject("next")}>
            Suivant
          </button>
          <button className="btn-ico" onClick={() => changeProject("next")}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Projects;
