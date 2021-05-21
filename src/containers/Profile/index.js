import React from 'react'
import styles from './style.module.css'

const Profile = ({source,name,sciname}) => {
    return (
        <div className={styles.container}>
            <img src={source}></img>
            {name}
            <p>{sciname}</p>
        </div>
    )
}

export default Profile
