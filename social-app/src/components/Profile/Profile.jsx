import React from 'react';
import Posts from "../Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "../Posts/PostsContainer";

const Profile = (props) => {
    return (
        <section>
            <ProfileInfo />
            <PostsContainer dispatch={props.dispatch} newPostData={props.state.posts.newPostData} />
            <Posts state={props.state.posts} />
        </section>
    );
};

export default Profile;