import React from "react";
import classes from "./ProjectModal.module.css";
import { motion } from 'framer-motion'

const ProjectModal = (props) => {

  const appearDisappear = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1.0,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      scale: 0,
    }
  }

  return (
    <>
      <div className={classes.backdrop} onClick={props.hide} >
        <motion.div onClick={(e) => e.stopPropagation()} variants={appearDisappear} initial="hidden" animate="visible" exit="exit" className={classes.modal}>
          <img src={props.image}></img>
          <h1>{props.title}</h1>
          <div className={classes.content}> {props.children} </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectModal;
