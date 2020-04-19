import React from 'react';
import {addPostActionCreator, updateNewPostDataActionCreator} from "../../redux/posts-reducer";
import AddPost from "./AddPost/AddPost";


const PostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
         props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (postText) => {
        let action = updateNewPostDataActionCreator(postText);
        props.store.dispatch(action);
    };

    return (
            <AddPost addPost={addPost} onPostChange={onPostChange} newPostData={state.posts.newPostData} />
    );
};

export default PostsContainer;