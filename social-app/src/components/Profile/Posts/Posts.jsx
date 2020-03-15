import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
    return (
            <div>
                <h3>Posts</h3>
                <Post title="First post" postContent="First post content"/>
                <Post title="Second post" postContent="Second post content"/>
                <Post title="Third post" postContent="Third post content"/>
            </div>
    );
}

export default Posts;