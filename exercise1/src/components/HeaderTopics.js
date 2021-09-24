import React from 'react'

const valikko = {marginRight: "30px"};

export default function HeaderTopics() {
    return (
        <div style = {{backgroundColor: 'white'}}>
        <div className = 'HeaderTopics'>  {/* Style from App.css*/}
        <p style={valikko}>Etusivu</p>
        <p style={valikko}>HS Visio</p>
        <p style={valikko}>Luetuimmat</p>
        <p style={valikko}>Uusimmat</p>
        <p style={valikko}>Politiikka</p>
        <p style={valikko}>Kaupunki</p>
        <p style={valikko}>Kulttuuri</p>
        <p style={valikko}>Tiede</p>
        <p style={valikko}>Hyvinvointi</p>
        <p style={valikko}>Ruoka</p>
        <p style={valikko}>Nyt</p>
       </div>
       </div>
    )
}
