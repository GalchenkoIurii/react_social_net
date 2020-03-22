import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.mainImg}>
                <img
                    src="https://community.kodular.io/uploads/default/original/2X/6/6218d50608595a107c07c35a12979966a620d433.jpg"
                    alt=""/>
            </div>
            <h2>Profile</h2>
            <div className={classes.profileInfoWrapper}>
                Avatar
            </div>
            <div className={classes.profileInfoWrapper}>
                Name
            </div>
            <div className={classes.profileInfoWrapper}>
                Description
            </div>
        </div>
    );
}

export default ProfileInfo;