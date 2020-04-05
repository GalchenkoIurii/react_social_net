import React from 'react';
import classes from './../Posts.module.css';

const AddPost = (props) => {

    let newPost = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch({type: "ADD-POST"});
    };

    let onPostChange = () => {
        let postText = newPost.current.value;
        // props.updateNewPostData(postText);
        props.dispatch({type: "UPDATE-NEW-POST-DATA", newPostText: postText});
    };

    return (
            <div className={classes.addPostWrapper}>
                <h2>Add Post</h2>
                    <textarea onChange={onPostChange} ref={newPost} value={props.newPostData} name="" id="" cols="30" rows="6" />
                    <button onClick={addPost}>Add Post</button>
            </div>
    );
};

export default AddPost;