import React, { useState } from "react";
import classes from "./Header.module.css";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const [isActive, setIsActive] = useState(false);

  const clickedContent = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header>
        <div className={classes.headerWrapper}>
          <h3> Jonathan Nanno </h3>
          <FontAwesomeIcon
            onClick={clickedContent}
            className={classes.font}
            icon={faBarsStaggered}
            size="2xl"
            flip="horizontal"
          />
        </div>
        <NavLinks className={classes.mobile} active={isActive} />
      </header>
    </>
  );
};

export default Header;
