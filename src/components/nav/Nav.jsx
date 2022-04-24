import React from "react";
import "./nav.scss";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { BsMoonStars } from "react-icons/bs";

import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <TiContacts />
      </a>
      <a href="#" className="theme__logo" id="theme-button">
        <BsMoonStars />
      </a>
    </nav>
  );
};

export default Nav;
