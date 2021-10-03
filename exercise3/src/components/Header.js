import React from 'react'
import styles from '../Header.module.css';
import cx from 'classnames'

export default function Header(props) {

    return (
        <div className = {styles.header}>
            <div style = {{marginLeft: '20px', fontFamily: 'sans-serif', fontSize: '28px'}}>
            amazon
            </div>
            <div className = {styles.container}>
            Deliver to Finland
            </div>
            <div className = {cx(styles.container, styles.searchbar)}>
            <select className = {styles.select}>
                <option value = "books">Books</option>
                <option value = "computers">Computers</option>
                <option value = "arts">Arts</option>
            </select>
            <input className = {styles.searchbar} type="text" placeholder="Search..."
            onChange = {props.onSearchChange} value = {props.itemSearchString}/> {/*Search bar, takes a function and a string as props*/}
            </div>
        </div>
    )
}
