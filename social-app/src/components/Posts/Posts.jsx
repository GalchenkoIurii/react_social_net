import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {

    let postsData = [
        {id: 1, title: "First post", postContent: "First post content"},
        {id: 2, title: "Second post", postContent: "Second post content"},
        {id: 3, title: "Third post", postContent: "Third post content"}
    ]

    return (
            <div className={classes.postsWrapper}>
                <h2>Posts</h2>
                <Post title={postsData[0].title} postContent={postsData[0].postContent} />
                <Post title={postsData[1].title} postContent={postsData[1].postContent} />
                <Post title={postsData[2].title} postContent={postsData[2].postContent} />
            </div>
    );
}

export default Posts;