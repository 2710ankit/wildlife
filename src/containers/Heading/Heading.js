import React from 'react'
import styles from './heading.module.css'

const Heading = ({name}) => {
    return (
        <div className={styles.container}>
            {name}
        </div>
    )
}

export default Heading
