import React from 'react';
import classes from './Messages.module.css';
import User from "./User/User";
import Message from "./Message/Message";
import AddMessage from "./AddMessage/AddMessage";

const Messages = (props) => {

    let users = props.state.users.usersData.map( user => <User name={user.name} avatar={user.avatarUrl} id={user.id} /> );

    let messages = props.state.messages.messagesData.map( message => <Message message={message.message} /> );

    return (
        <section>
            <h2>Messages</h2>
            <div className={classes.messagesContainer}>
                <div className={classes.users}>
                    {users}
                </div>
                <div className={classes.messages}>
                    {messages}
                    <AddMessage newMessageData={props.state.messages.newMessageData} dispatch={props.dispatch} />
                </div>
            </div>
        </section>
    );
}

export default Messages;