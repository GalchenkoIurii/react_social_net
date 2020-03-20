import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <img src="https://www.johnsoncontrols.com/-/media/jci/be/united-states/our-brands/720/fx.png?h=320&w=720&la=en&hash=0B1939430AB3A509897A620A0B1147A89E287546" alt=""/>
            </div>
        </header>
    );
}

export default Header;