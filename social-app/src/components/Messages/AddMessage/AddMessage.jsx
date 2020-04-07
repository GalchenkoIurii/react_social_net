import React from 'react';
import classes from './../Messages.module.css';
import {addMessageActionCreator, updateNewMessageDataActionCreator} from "../../../redux/state";


const AddMessage = (props) => {

    // let newMessage = React.createRef(); ref={newMessage}

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (event) => {
        let messageText = event.target.value;
        props.dispatch(updateNewMessageDataActionCreator(messageText));
    };

    return (
             <div className={classes.addMessageWrapper}>
                    <textarea onChange={onMessageChange} value={props.newMessageData} name="" id="" cols="30" rows="6" />
                    <button onClick={addMessage}>Add Message</button>
            </div>
    );
};

export default AddMessage;