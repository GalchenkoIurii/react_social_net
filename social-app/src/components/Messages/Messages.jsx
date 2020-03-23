import React from 'react';
import classes from './Messages.module.css';
import User from "./User/User";
import Message from "./Message/Message";

const Messages = (props) => {

    let users = props.usersData.map( user => <User name={user.name} id={user.id} /> );

    let messages = props.messagesData.map( message => <Message message={message.message} /> );

    return (
        <section>
            <h2>Messages</h2>
            <div className={classes.messagesContainer}>
                <div className={classes.users}>
                    {users}
                </div>
                <div className={classes.messages}>
                    {messages}
                </div>
            </div>
        </section>
    );
}

export default Messages;