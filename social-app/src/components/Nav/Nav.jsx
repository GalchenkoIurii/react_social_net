import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={`${classes.item} ${classes.link}`}><NavLink to="/profile">Profile</NavLink></li>
                <li className="item"><NavLink to="/messages">Messages</NavLink></li>
                <li className="item"><NavLink to="/posts">Posts</NavLink></li>
                <li className="item"><NavLink to="/news">News</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;