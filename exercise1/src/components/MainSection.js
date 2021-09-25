import React from 'react'
import styles from './MainSection.module.css'


export default function MainSection(props) {
    return (
   
        <div className = {styles.container}>
            <div>
          
            <img src = {props.img} alt = ""/>
            <h1 style = {{marginTop: '10px'}}> <span style = {{color: 'rgb(0, 81, 141)'}}> {props.topic} | </span> {props.body} </h1>
            </div>
            </div>
        
    )
}
