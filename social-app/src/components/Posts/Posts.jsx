import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

    return (
            <div className={classes.postsWrapper}>
                <h2>Posts</h2>
                <Post title={props.state.postsData[0].title} postContent={props.state.postsData[0].postContent} />
                <Post title={props.state.postsData[1].title} postContent={props.state.postsData[1].postContent} />
                <Post title={props.state.postsData[2].title} postContent={props.state.postsData[2].postContent} />
            </div>
    );
}

export default Posts;