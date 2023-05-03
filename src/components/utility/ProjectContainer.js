import React from "react";
import classes from "./ProjectContainer.module.css";

const ProjectContainer = (props) => {
  return (
    <div onClick={props.onClick} className={classes.projectContainer}>
      <h1> {props.name} </h1>
      <img src={props.img} alt={props.imageName} />
      <p> Information about the project </p>
      <p className={classes.hidden}> Click for more Information </p>
    </div>
  );
};

export default ProjectContainer;
