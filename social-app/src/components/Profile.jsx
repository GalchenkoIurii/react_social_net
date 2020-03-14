import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <section className={classes.content}>
            <div className={classes.mainImg}>
                <img src="https://community.kodular.io/uploads/default/original/2X/6/6218d50608595a107c07c35a12979966a620d433.jpg" alt=""/>
            </div>
            <h2>Content</h2>
        </section>
    );
}

export default Profile;