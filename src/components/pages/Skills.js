import React from "react";
import ImageArray from "../utility/ImageArray";
import{ AnimatePresence, motion } from 'framer-motion';

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
      <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} exit={{opacity: 0 }}>
        <h1> My Skills</h1>
        <div className={classes.container}>{imgArray()}</div>
      </motion.div>
    </main>
  );
};

export default Skills;
