import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
                <div>
                    <h4>{props.title}</h4>
                    <p>{props.postContent}</p>
                </div>
    );
}

export default Post;