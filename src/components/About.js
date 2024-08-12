import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <divk id="about">
      <h2>About Me</h2>
      <p>Let's ship stuff!</p>
      <img src={image} alt="I made this" />
    </divk>
  );
}

export default About;
