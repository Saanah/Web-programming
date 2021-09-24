import React from 'react'
import styles from './Notifications.module.css'

export default function Notifications(props) {
    return (
        <div className = {styles.container}>
        <span style = {{fontSize: "16px", fontWeight: 750}}>{props.topic} </span><span className = {styles.notificationHeader}>{props.body}</span>
        </div>
    )
}

