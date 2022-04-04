import React from "react";
import "./contact.scss";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch!</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>email@email.com</h5>
            <a href="mailto:email@email.com" target="_blank">
              Send me a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>Rukassu_</h5>
            <a href="https://www.instagram.com/rukassu_/" target="_blank">
              Send me a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Lucas Perez</h5>
            <a href="https://www.linkedin.com/in/lucprzfs/" target="_blank">
              Send me a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
