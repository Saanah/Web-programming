import React from 'react'
import styles from '../SearchComputerItems.module.css';
import ComputerItems from './ComputerItems';

export default function SearchComputerItems(props) {
    return (
        <div className = {styles.title}>
        Computers, Tablets and IT Accessories
        <div className = {styles.container}>{
        props.items.map(item => <ComputerItems key={item.id} {...item} />)}
        </div>
        </div>
    )
}
