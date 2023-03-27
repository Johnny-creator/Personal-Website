import React from "react";
import MediaLinks from "../utility/MediaLinks";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <MediaLinks size="xl" />
      <p>  Copyright © 2022 Jonathan Nanno </p>
    </footer>
  );
};

export default Footer;
