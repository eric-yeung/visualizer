import React from 'react';

export default function header() {
    return (
        <header style={headerStyle}>
            <h1>Visualizer for CPEs and CVEs</h1>
            
        </header>
    )
}


const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}