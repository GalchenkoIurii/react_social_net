import React from 'react';
import classes from './Messages.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    let path = "/messages/" + props.id;

    return (
        <div className={classes.user}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    );
}

const Messages = (props) => {
    return (
        <section>
            <h2>Messages</h2>
            <div className={classes.messagesContainer}>
                <div className={classes.users}>
                    <User name="John" id="john" />
                    <User name="Jack" id="jack" />
                    <User name="James" id="james" />
                </div>
                <div className={classes.messages}>
                    <Message message="First message" />
                    <Message message="One more message" />
                    <Message message="And one more message"/>
                </div>
            </div>
        </section>
    );
}

export default Messages;