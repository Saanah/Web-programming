import React from 'react'
import styles from '../ComputerItems.module.css';

export default function ComputerItems(props) {
    return (
        <div className = {styles.items}>
            <div>
            <div><img className = {styles.photo} src={`/images/${props.image}`} /></div>
            <div className = {styles.text}>{props.name}</div>
            <div className = {styles.subtext}>Rating: {props.rating}</div>
            <div className = {styles.subtext}>${props.price}</div>
            </div>
        </div>
    )
}
