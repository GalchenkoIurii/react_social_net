import React from 'react';
import classes from './../Messages.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    let path = "/messages/" + props.id;

    return (
        <div className={classes.user}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
}

export default User;