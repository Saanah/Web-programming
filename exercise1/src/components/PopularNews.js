import React from 'react'
import styles from './PopularNews.module.css'

export default function PopularNews(props) {

    return (
      
        <div className = {styles.container}>
            <div className = {styles.news}>
                <p><span style = {{fontWeight: 'bold'}}> {props.topic} | </span> {props.body} </p>
            </div>
            <h3 style = {{color: 'rgb(233, 234, 237)', textAlign: 'left', fontFamily: 'Roboto'}}>___________________________</h3>
        </div>
        
    )
}
