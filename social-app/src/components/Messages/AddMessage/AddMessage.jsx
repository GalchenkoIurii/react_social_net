import React from 'react';
import classes from './../Messages.module.css';

let addMessageActionCreator = () => {
    return {
        type: "ADD-MESSAGE"
    };
};
let updateNewMessageDataActionCreator = (messageText) => {
    return {
        type: "UPDATE-NEW-MESSAGE-DATA",
        newMessageText: messageText
    };
};

const AddMessage = (props) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = () => {
        let messageText = newMessage.current.value;
        props.dispatch(updateNewMessageDataActionCreator(messageText));
    };

    return (
             <div className={classes.addMessageWrapper}>
                    <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageData} name="" id="" cols="30" rows="6" />
                    <button onClick={addMessage}>Add Message</button>
            </div>
    );
};

export default AddMessage;