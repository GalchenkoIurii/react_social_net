import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={`${classes.item} ${classes.link}`}><a>Profile</a></li>
                <li className="item"><a>Messages</a></li>
                <li className="item"><a>Posts</a></li>
                <li className="item"><a>News</a></li>
            </ul>
        </nav>
    );
}

export default Nav;