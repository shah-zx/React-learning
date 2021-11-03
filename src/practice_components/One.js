import React from 'react'
import './One.css'
function One() {

    let myStyle = {
        color: 'white',
        backgroundColor: 'red' , 
        width: '18rem' , 
    
    }
    return (
        
        <div class="card" style={myStyle}>
            <div class="card-body">
                <h5 class="card-title">My card</h5>
                <h6 class="card-subtitle mb-2 text-muted">Subtitle</h6>
                <p class="card-text">This is the content of the card and is the red card. </p>
            </div>
        </div>
    )
}

export default One
