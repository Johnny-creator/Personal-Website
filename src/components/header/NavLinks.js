import React, { useState } from "react";
import './NavLinks.css';

const HeaderLinks = (props) => {
  return (
    <div className={`navlinks ${props.active ? 'isVisible' : ''}`}>
      <a href="/"> About Me </a>
      <a href="/"> Skills </a>
      <a href="/"> Projects </a>
      <a href="/"> Contact </a>
      <a href="/"> Resume </a>
    </div>
  );
};

export default HeaderLinks;
