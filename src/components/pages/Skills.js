import React from "react";
import ImageArray from "../utility/ImageArray";

import classes from "./Skills.module.css";

const Skills = () => {
  let items = [];

  const imgArray = () => {
    for (let i = 0; i < ImageArray.length; i++) {
      let single = ImageArray[i];
      items.push(
        <div className={classes.child} key={i}>
          <img src={single.img} alt={single.name} />
          <p> {single.name}</p>
        </div>
      );
    }
    return items;
  };

  return (
    <main className={classes.body}>
      <h1> My Skills</h1>
      <div className={classes.container}>{imgArray()}</div>
    </main>
  );
};

export default Skills;
