import React from 'react';
import classes from './../Posts.module.css';


const AddPost = (props) => {

    // let newPost = React.createRef(); ref={newPost}

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (event) => {
        let postText = event.target.value;
        props.onPostChange(postText);
        // props.dispatch(updateNewPostDataActionCreator(postText));
    };

    return (
            <div className={classes.addPostWrapper}>
                <h2>Add Post</h2>
                    <textarea onChange={onPostChange} value={props.newPostData} name="" id="" cols="30" rows="6" />
                    <button onClick={onAddPost}>Add Post</button>
            </div>
    );
};

export default AddPost;