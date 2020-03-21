import React from 'react';
import classes from './Messages.module.css';

const Messages = (props) => {
    return (
        <section>
            <h2>Messages</h2>
            <div className={classes.messagesContainer}>
                <div className={classes.users}>
                    <div className={`${classes.user} ${classes.active}`}>
                        John
                    </div>
                    <div className={classes.user}>
                        Jack
                    </div>
                    <div className={classes.user}>
                        James
                    </div>
                </div>
                <div className={classes.messages}>
                    <div className={classes.message}>
                        Some message
                    </div>
                    <div className={classes.message}>
                        One more message
                    </div>
                    <div className={classes.message}>
                        And one more message
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Messages;