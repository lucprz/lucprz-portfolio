import React from "react";
import "./nav.scss";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";

const Nav = () => {
  return (
    <Nav>
      <a href="#home">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experiences">
        <AiOutlineBook />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <TiContacts />
      </a>
    </Nav>
  );
};

export default Nav;
