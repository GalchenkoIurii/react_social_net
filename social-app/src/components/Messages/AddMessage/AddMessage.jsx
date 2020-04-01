import React from 'react';
import classes from './../Messages.module.css';

const AddMessage = (props) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let messageText = newMessage.current.value;
        props.updateNewMessageData(messageText);
    };

    return (
             <div className={classes.addMessageWrapper}>
                    <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageData} name="" id="" cols="30" rows="6" />
                    <button onClick={addMessage}>Add Message</button>
            </div>
    );
};

export default AddMessage;