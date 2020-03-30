import React from 'react';
import classes from './../Messages.module.css';

const AddMessage = (props) => {

    let newMessage = React.createRef();

    let addMessage = (event) => {
        event.preventDefault();
        let postText = newMessage.current.value;
        alert(postText);
    };

    return (
             <div className={classes.addMessageWrapper}>
                <form action="">
                    <textarea ref={newMessage} name="" id="" cols="30" rows="6"></textarea>
                    <button onClick={addMessage}>Add Message</button>
                </form>
            </div>
    );
}

export default AddMessage;