import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={`${classes.item} ${classes.link}`}><a href="/profile">Profile</a></li>
                <li className="item"><a href="/messages">Messages</a></li>
                <li className="item"><a href="/posts">Posts</a></li>
                <li className="item"><a href="/news">News</a></li>
            </ul>
        </nav>
    );
}

export default Nav;