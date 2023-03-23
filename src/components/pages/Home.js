import React from "react";

import classes from "./Home.module.css";
import testPhoto from "../../images/PersonalPhoto.png";

const Home = () => {
  return (
    <div className={classes.body}>
      <h1> Freelance Front-end developer </h1>
      <img className={classes.img} src={testPhoto} alt="Personal Photo" />
      <p> Hi, my name is Jonathan Nanno </p>
      <a href="/"> Resume </a>
      <a href="/"> LinkedIn </a>
      <a href="/"> Github </a>
    </div>
  );
};

export default Home;
