import React, { useState } from "react";
import HeaderLinks from "./NavLinks";
import classes from "./Header.module.css";
import MobileNavLinks from "./MobileNavLinks";

const Header = (props) => {
  const [isActive, setIsActive] = useState(false);

  const clickedContent = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  return (
    <>
      <header className={classes.hoverContent}>
        <p onClick={clickedContent}> Hover Content </p>
        {isActive && <MobileNavLinks />}
      </header>
    </>
  );
};

export default Header;
