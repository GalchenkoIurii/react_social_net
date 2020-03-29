import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Contacts from "../Contacts/Contacts";

const Nav = (props) => {

    return (
        <nav className={classes.nav}>
            <ul>
                <li className={`${classes.item} ${classes.link}`}><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></li>
                <li className="item"><NavLink to="/messages" activeClassName={classes.active}>Messages</NavLink></li>
                <li className="item"><NavLink to="/posts" activeClassName={classes.active}>Posts</NavLink></li>
                <li className="item"><NavLink to="/news" activeClassName={classes.active}>News</NavLink></li>
            </ul>
            <Contacts state={props.state} />
        </nav>
    );
}

export default Nav;