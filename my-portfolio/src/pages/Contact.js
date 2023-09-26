import React from "react";
import "../styles/Contact.css";

const Contact = () => {
    return (
        <div class="letter-image">
        <div class="animated-mail">
            <div class="back-fold"></div>
            <div class="letter">
            <a 
                class="contactlink"  
                href="mailto:becker.clement@gmail.com">
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
    );
};

export default Contact;
  