import React from 'react';
import classes from './NavLinks.module.css';

const HeaderLinks = () => {
  return <div className={classes.paragraph}>
        <a href="/"> About Me </a>
        <a href="/"> Skills </a>
        <a href="/"> Projects </a>
        <a href="/"> Contact </a>
        <a href="/"> Resume </a>
  </div>
};

export default HeaderLinks;