import React from "react";
import "../styles/Contact.css";
import discord from "../assets/icons/Reseau/discord-logo.webp";

const Contact = () => {
  return (
    <div className="contact-div">
      <p>Me contacter</p>
      <div className="contact-container">
        <div className="mail">
          Email
          <div class="letter-image">
            <div class="animated-mail">
              <div class="back-fold"></div>
              <div class="letter">
                <a class="contactlink" href="mailto:becker.clement@gmail.com">
                  Contactez moi !
                </a>
                <div class="letter-border"></div>
                <div class="letter-title"></div>
                <div class="letter-context"></div>
                <div class="letter-stamp">
                  <div class="letter-stamp-inner"></div>
                </div>
              </div>
              <div class="top-fold"></div>
              <div class="body"></div>
              <div class="left-fold"></div>
            </div>
            <div class="shadow"></div>
          </div>
        </div>
        <div className="discord">
          Discord <br />
          aelbus
          <a href="https://discord.gg/PvyFbgvuvk">
            <img className="discord-logo" src={discord} alt="Discord" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
