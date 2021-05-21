import React from 'react'
import styles from './heading.module.css'

const Heading = ({name}) => {
    return (
        <div className={styles.container}>
            <h1>{name}</h1>
        </div>
    )
}

export default Heading
