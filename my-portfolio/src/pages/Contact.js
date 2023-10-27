import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

function ContactForm() {
  const [errors, setErrors] = useState({});
  const inputRefs = {
    name: useRef(null),
    email: useRef(null),
    subject: useRef(null),
    message: useRef(null),
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setErrors({}); // Réinitialisez les erreurs avant chaque soumission

    const requiredFields = ["name", "email", "subject", "message"];
    let hasErrors = false;

    requiredFields.forEach((field) => {
      if (!e.target[field].value) {
        hasErrors = true;
        e.target[field].placeholder = "Champ requis";
      }
    });

    if (hasErrors) {
      return; // Ne soumettez pas le formulaire s'il y a des erreurs
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
            <label>Nom:</label>
            <input type="text" name="name" ref={inputRefs.name} />
          </div>
          <div className="contact-label">
            <label>Email:</label>
            <input type="email" name="email" ref={inputRefs.email} />
          </div>
          <div className="contact-label">
            <label>Sujet:</label>
            <input type="text" name="subject" ref={inputRefs.subject} />
          </div>
          <div className="contact-label">
            <label>Téléphone:</label>
            <input type="tel" name="phone" />
          </div>
          <div className="contact-label">
            <label>Message:</label>
            <textarea name="message" ref={inputRefs.message} />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
