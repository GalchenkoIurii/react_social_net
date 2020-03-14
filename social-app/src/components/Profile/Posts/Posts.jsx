import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
    return (
            <div>
                <h3>Posts</h3>
                <Post/>
            </div>
    );
}

export default Posts;