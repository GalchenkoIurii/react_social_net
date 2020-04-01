import React from 'react';
import Posts from "../Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AddPost from "../Posts/AddPost/AddPost";

const Profile = (props) => {
    return (
        <section>
            <ProfileInfo />
            <AddPost addPost={props.addPost} newPostData={props.state.newPostData} updateNewPostData={props.updateNewPostData} />
            <Posts state={props.state} />
        </section>
    );
};

export default Profile;