import React from "react";
import { Link } from "react-router-dom";

import "./NavLinks.css";

const HeaderLinks = (props) => {
  return (
    <div className={`navlinks ${props.active ? "isVisible" : ""}`}>
      <Link to="/"> Home </Link>
      <Link to="/about"> About Me </Link>
      <Link to="/skills"> Skills </Link>
      <Link to="/projects"> Projects </Link>
      <Link to="/contact"> Contact </Link>
      <Link to="/resume"> Resume </Link>
    </div>
  );
};

export default HeaderLinks;
