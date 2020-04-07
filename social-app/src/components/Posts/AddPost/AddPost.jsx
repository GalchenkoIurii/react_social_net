import React from 'react';
import classes from './../Posts.module.css';
import {addPostActionCreator, updateNewPostDataActionCreator} from "../../../redux/posts-reducer";


const AddPost = (props) => {

    // let newPost = React.createRef(); ref={newPost}

    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (event) => {
        let postText = event.target.value;
        // props.updateNewPostData(postText);
        props.dispatch(updateNewPostDataActionCreator(postText));
    };

    return (
            <div className={classes.addPostWrapper}>
                <h2>Add Post</h2>
                    <textarea onChange={onPostChange} value={props.newPostData} name="" id="" cols="30" rows="6" />
                    <button onClick={addPost}>Add Post</button>
            </div>
    );
};

export default AddPost;