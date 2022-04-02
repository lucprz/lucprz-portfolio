import React from "react";
import "./testimonials.scss";
import Avatar from "../../assets/testimonials-avatar.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Avatar} alt="Avatar" />
          </div>
          <h5 className="client__name"> John Doe</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ab
            laborum optio, vel in totam nihil nulla minima enim ratione dolorum
            ex exercitationem quo? Perferendis voluptates doloribus dolor vel
            reprehenderit!
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
