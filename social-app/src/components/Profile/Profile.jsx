import React from 'react';
import Posts from "../Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AddPost from "../Posts/AddPost/AddPost";

const Profile = (props) => {
    return (
        <section>
            <ProfileInfo />
            <AddPost dispatch={props.dispatch} newPostData={props.state.posts.newPostData} />
            <Posts state={props.state.posts} />
        </section>
    );
};

export default Profile;