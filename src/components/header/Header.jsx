import React from "react";
import "./header.scss";
import HeaderSocials from "./HeaderSocials";
import HeaderNav from "./HeaderNav";
import CTA from "./CTA";
import ME from "../../assets/perfil.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <HeaderNav />
        <h5>Hello I'm</h5>
        <h1>Luc Prz</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
