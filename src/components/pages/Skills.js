import React from "react";
import ImageArray from "../utility/ImageArray";

import classes from "./Skills.module.css";

const Skills = () => {
  let items = [];

  const imgArray = () => {
    for (let i = 0; i < ImageArray.length; i++) {
      let single = ImageArray[i];
      items.push(<img key={i} src={single.img} alt={single.name} />);
    }
    return items;
  };

  return (
    <main className={classes.body}>
      <h1> Skills </h1>
      <div className={classes.container}>
        {imgArray()}
      </div>
    </main>
  );
};

export default Skills;
