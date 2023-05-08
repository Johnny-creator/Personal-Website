import React from "react";
import { motion } from "framer-motion";
import classes from "./ProjectContainer.module.css";

const ProjectContainer = (props) => {
  const moveDown = {
    animate: {
      scale: 1.3,
      transition: {
        duration: 0.3,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      whileHover="animate"
      onClick={props.onClick}
      className={classes.projectContainer}
    >
      <h1> {props.name} </h1>
      <img src={props.img} alt={props.imgAlt} />
      <p> Information about the project </p>
      <motion.div variants={moveDown} className={classes.click}>
        {" "}
        <p> Click for more Information </p>{" "}
      </motion.div>
    </motion.div>
  );
};

export default ProjectContainer;
