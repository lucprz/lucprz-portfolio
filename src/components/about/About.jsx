import React from "react";
import "./about.scss";
import ME from "../../assets/about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { CgFolder } from "react-icons/cg";
const About = () => {
  return (
    <section id="about">
      <h5> Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5> Clients</h5>
              <small>200+ worldwide</small>
            </article>

            <article className="about__card">
              <CgFolder className="about__icon" />
              <h5> Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            facilis placeat nemo, optio possimus soluta magnam, cum eaque magni
            laudantium, nostrum repellendus totam itaque aliquam perspiciatis
            repellat. Dolorem, reprehenderit veniam.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
