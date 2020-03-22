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

    let usersData = [
        {id: "john", name: "John"},
        {id: "jack", name: "Jack"},
        {id: "james", name: "James"}
    ]
    let messagesData = [
        {id: 1, message: "First message"},
        {id: 2, message: "One more message"},
        {id: 3, message: "And one more message"}
    ]

    return (
        <section>
            <h2>Messages</h2>
            <div className={classes.messagesContainer}>
                <div className={classes.users}>
                    <User name={usersData[0].name} id={usersData[0].id} />
                    <User name={usersData[1].name} id={usersData[1].id} />
                    <User name={usersData[2].name} id={usersData[2].id} />
                </div>
                <div className={classes.messages}>
                    <Message message={messagesData[0].message} />
                    <Message message={messagesData[1].message} />
                    <Message message={messagesData[2].message} />
                </div>
            </div>
        </section>
    );
}

export default Messages;