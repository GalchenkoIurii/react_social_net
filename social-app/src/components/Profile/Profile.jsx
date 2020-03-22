import React from 'react';
import Posts from "../Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <section>
            <ProfileInfo/>
            <Posts/>
        </section>
    );
}

export default Profile;