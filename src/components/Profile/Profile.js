import React from 'react';
import classes from './Profile.module.css';
import ProfileIcon from '../../assets/svgs/profile.svg';


const Profile = (props) => {
    return <span className={classes.Profile}>
        <img className={classes.ProfileIcon} src={ProfileIcon} />
    </span>
}

export default Profile;