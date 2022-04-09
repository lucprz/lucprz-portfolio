import React from "react";
import "./footer.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        LucPrz
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank">
          <FaGithub />
        </a>
        <a href="https://instagram.com" target="_blank">
          <FaInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; LucPrz portfolio</small>
      </div>
    </footer>
  );
};

export default Footer;
