import React from "react";
import "./services.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Lorem ipsum.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Lorem ipsum.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Lorem ipsum.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Lorem ipsum.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Lorem ipsum.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        {/* WEB DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Lorem ipsum.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Lorem ipsum.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Lorem ipsum.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Lorem ipsum.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Lorem ipsum.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        {/* CONTENT CREATION*/}
        <article className="service">
          <div className="service__head">
            <h3>Content creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Lorem ipsum.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Lorem ipsum.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Lorem ipsum.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Lorem ipsum.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Lorem ipsum.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
