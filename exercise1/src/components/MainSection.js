import React from 'react'
import styles from './MainSection.module.css'
import img1 from '../images/image1.png'


export default function MainSection() {
    return (

        <div className = {styles.container}>
            <div>
            <img src = {img1} alt = ""/>
            <h1 style = {{marginTop: '10px'}}> <span style = {{color: 'rgb(0, 81, 141)'}}> Petokset | </span> Poliisi: Omakanta palvelulta näyttävät valesivustot
            kalastelevat pankkitunnuksia - näin suojaudut huijaukselta </h1>
            </div>
        </div>
        
    )
}
