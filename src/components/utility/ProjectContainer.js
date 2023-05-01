import React from "react";
import classes from "./ProjectContainer.module.css";

const ProjectContainer = (props) => {
  return (
    <div onClick={props.onClick} className={classes.projectContainer}>
      <h1> {props.name} </h1>
      <img src={props.img} alt={props.imageName} />
    </div>
  );
};

export default ProjectContainer;
