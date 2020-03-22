import React from 'react';
import classes from './Messages.module.css';
import User from "./User/User";
import Message from "./Message/Message";

const Messages = (props) => {

    let usersData = [
        {id: "john", name: "John"},
        {id: "jack", name: "Jack"},
        {id: "james", name: "James"}
    ];

    let messagesData = [
        {id: 1, message: "First message"},
        {id: 2, message: "One more message"},
        {id: 3, message: "And one more message"}
    ];

    let users = usersData.map( user => <User name={user.name} id={user.id} /> );

    let messages = messagesData.map( message => <Message message={message.message} /> );

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