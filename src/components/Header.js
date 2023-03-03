import React from 'react';
import HeaderLinks from './HeaderLinks';
import classes from './Header.module.css';

const Header = (props) => {
    return <>
        <header className={classes.header}>
            <HeaderLinks />
        </header>
    </>
}

export default Header;