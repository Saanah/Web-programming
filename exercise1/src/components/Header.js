import React from 'react'
import '../App.css'

export default function header() {


    return (
        <div className = 'Header'>                                                               {/* Style from App.css*/}
        <h1 style={{ margin: '170px'}} >Helsingin Sanomat</h1>                                   {/* Inline styling */}
        <p style={{ margin: '-130px', marginRight: '.9rem', fontSize: '18px'}}>Uutiset</p>
        <p style={{ marginLeft: '.9rem', fontSize: '18px'}}>Lehdet</p>
        <p style={{marginLeft: '9rem', fontSize: '18px'}}>Tilaa</p>
        <p style={{ marginLeft: '2rem', fontSize: '18px'}}>Kirjaudu</p>
        <p style={{ marginLeft: '2rem', fontSize: '18px'}}>Hae</p>
        <p style={{ marginLeft: '2rem', fontSize: '18px'}}>Valikko</p>
        </div>
    )
    
    }