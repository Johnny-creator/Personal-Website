import React from "react";

import classes from "./Home.module.css";
import testPhoto from "../../images/PersonalPhoto.png";
import MediaLinks from "../utility/MediaLinks";

const Home = () => {
  return (
    <div className={classes.body}>
      <h1> Freelance Front-end developer </h1>
      <img className={classes.img} src={testPhoto} alt="Personal Photo" />
      <p> Hi, my name is Jonathan Nanno </p>
      <MediaLinks size="3x"/>
    </div>
  );
};

export default Home;
