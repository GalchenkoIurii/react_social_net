import React from 'react';
import Posts from "../Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "../Posts/PostsContainer";

const Profile = (props) => {
    return (
        <section>
            <ProfileInfo />
            <PostsContainer store={props.store} />
            <Posts postsData={props.state.posts.postsData} />
        </section>
    );
};

export default Profile;