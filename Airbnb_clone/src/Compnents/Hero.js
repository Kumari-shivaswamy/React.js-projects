import React from "react";
import Hero_image from "../../src/Assets/airbnb_Hero-Comp_image.png";
function Hero() {
  return (
    <section className="Hero">
      <img src={Hero_image} alt="Hero Image" className="hero--photo" />
      <h1 className="hero--header">Online Experience</h1>
      <p className="hero--text">
        Join unique interactive activities leb by one-of-a-kind hosts without
        leaving home
      </p>
    </section>
  );
}
export default Hero;
