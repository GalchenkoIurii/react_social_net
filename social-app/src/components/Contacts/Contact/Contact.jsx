import React from 'react';
import classes from './../Contacts.module.css';
import {NavLink} from "react-router-dom";

const Contact = (props) => {
    let path = "/contacts/" + props.id;

    return (
        <div className={classes.contact}>
            <NavLink to={path} activeClassName={classes.active}>
                <img src={props.avatar} alt=""/>
                {props.name}
            </NavLink>
        </div>
    );
}

export default Contact;