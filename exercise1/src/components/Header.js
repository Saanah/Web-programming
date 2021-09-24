import React from 'react'


export default function header() {

    const tilaa = {marginLeft: '9rem', fontSize: '18px', color: 'black', backgroundColor: 'white', height: "30px", width: "100px", border: "2px",
    borderRadius: "15px"}
    return (
        <div className = 'Header'>                                                               {/* Style from App.css*/}
        <h1 style={{ margin: '170px'}} >HELSINGIN SANOMAT</h1>                                   {/* Inline styling */}
        <p style={{ margin: '-130px', marginRight: '.9rem', fontSize: '18px'}}>Uutiset</p>
        <p style={{ marginLeft: '.9rem', fontSize: '18px'}}>Lehdet</p>
        <div style={tilaa}>Tilaa</div>
        <p style={{ marginLeft: '2rem', fontSize: '18px'}}>Kirjaudu</p>
        <p style={{ marginLeft: '2rem', fontSize: '18px'}}>Hae</p>
        <p style={{ marginLeft: '2rem', fontSize: '18px'}}>Valikko</p>
        </div>
    )
    
    }