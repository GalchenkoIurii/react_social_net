import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={`${classes.item} ${classes.link}`}><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></li>
                <li className="item"><NavLink to="/messages" activeClassName={classes.active}>Messages</NavLink></li>
                <li className="item"><NavLink to="/posts" activeClassName={classes.active}>Posts</NavLink></li>
                <li className="item"><NavLink to="/news" activeClassName={classes.active}>News</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;