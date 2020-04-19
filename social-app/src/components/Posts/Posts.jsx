import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    debugger;
    let posts = props.postsData.map(post => <Post title={post.title} postContent={post.postContent} />);

    return (
            <div className={classes.postsWrapper}>
                <h2>Posts</h2>
                {posts}
            </div>
    );
};

export default Posts;