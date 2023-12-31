import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import IMGcontact from "../assets/images/photos/contact.webp";
import "../styles/pages/Contact.css";

function ContactForm() {
  const [isSent, setIsSent] = useState(false); // État pour suivre l'envoi du formulaire

  const inputRefs = {
    name: useRef(null),
    email: useRef(null),
    subject: useRef(null),
    message: useRef(null),
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const requiredFields = ["name", "email", "subject", "message"];
    let hasErrors = false;

    requiredFields.forEach((field) => {
      if (!e.target[field].value) {
        hasErrors = true;
        e.target[field].placeholder = "Champ requis";
      }
    });

    if (hasErrors) {
      return; // Ne soumet pas le formulaire s'il y a des erreurs
    }

    emailjs
      .sendForm(
        "service_f9be7us",
        "template_ojb2nka",
        e.target,
        "hFutUuL7N2e3bi_9a"
      )
      .then((result) => {
        console.log("E-mail envoyé avec succès", result.text);
        setIsSent(true); // Met à jour l'état pour afficher le message de confirmation
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'e-mail", error);
      });
  };

  return (
    <div className="contact-div">
      <div className="contact-container">
        <h2>Contactez-moi</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="contact-label">
            <label htmlFor="name">Nom:</label>
            <input type="text" name="name" id="name" ref={inputRefs.name} />
          </div>
          <div className="contact-label">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" ref={inputRefs.email} />
          </div>
          <div className="contact-label">
            <label htmlFor="subject">Sujet:</label>
            <input
              type="text"
              name="subject"
              id="subject"
              ref={inputRefs.subject}
            />
          </div>
          <div className="contact-label">
            <label htmlFor="phone">Téléphone:</label>
            <input type="tel" name="phone" id="phone" />
          </div>
          <div className="contact-label">
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" ref={inputRefs.message} />
          </div>
          <div className="btn-submit">
            <button type="submit">Envoyer</button>
            {isSent && (
              <p className="Enjoy">Votre message a été envoyé avec succès !</p>
            )}
          </div>
        </form>
      </div>
      <div className="contact-img">
        <img src={IMGcontact} alt="Contact" />
      </div>
    </div>
  );
}

export default ContactForm;
