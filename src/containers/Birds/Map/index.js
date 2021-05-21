import React from 'react'
import styles from './Map.module.css'

const Map = ({source,text}) => {
    return (
        <div className={styles.container}>
            <img src={source} ></img>
            <br></br>
            {text}
        </div>
    )
}

export default Map
