import React from "react";
import { Link } from "react-router-dom";
import pdf from '../../files/Jonathan Nanno Online Resume.pdf'



import "./NavLinks.css";

const HeaderLinks = (props) => {
  return (
    <div className={`navlinks ${props.active ? "isVisible" : ""}`}>
      <Link to="/"> Home </Link>
      <Link to="/about"> About Me </Link>
      <Link to="/skills"> Skills </Link>
      <Link to="/projects"> Projects </Link>
      <Link to="/contact"> Contact </Link>
      <a href={pdf} target="_blank" rel="noreferrer"> Resume </a>
    </div>
  );
};

export default HeaderLinks;
