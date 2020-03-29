import React from 'react';
import classes from './../Posts.module.css';

const AddPost = (props) => {

    let newPost = React.createRef();

    let addPost = (event) => {
        event.preventDefault();
        let postText = newPost.current.value;
        alert(postText);
    };

    return (
            <div className={classes.addPostWrapper}>
                <h2>Add Post</h2>
                <form action="">
                    <textarea ref={newPost} name="" id="" cols="30" rows="6"></textarea>
                    <button onClick={addPost}>Add Post</button>
                </form>
            </div>
    );
}

export default AddPost;