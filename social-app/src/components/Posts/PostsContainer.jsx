import React from 'react';
import {addPostActionCreator, updateNewPostDataActionCreator} from "../../redux/posts-reducer";
import AddPost from "./AddPost/AddPost";


const PostsContainer = (props) => {

    let addPost = () => {
         props.dispatch(addPostActionCreator());
    };

    let onPostChange = (postText) => {
        let action = updateNewPostDataActionCreator(postText);
        props.dispatch(action);
    };

    return (
            <AddPost addPost={addPost} onPostChange={onPostChange} newPostData={props.newPostData} />
    );
};

export default PostsContainer;