import React, { useState } from "react";
import classes from "./Header.module.css";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const [isActive, setIsActive] = useState(false);

  const clickedContent = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  return (
    <>
      <header>
        <div className={classes.headerWrapper}>
          <p> Jonathan Nanno </p>
          <FontAwesomeIcon onClick={clickedContent} className={classes.font} icon={faBarsStaggered} />
        </div>
        <NavLinks active={isActive} />
      </header>
    </>
  );
};

export default Header;
