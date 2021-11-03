import React, { useState } from 'react'  // We  also imported the usestate from react so that it can be used in the component //
import './One.css'
function One() {

    // let myStyle = {  // This is an objetct whic will give us the color for every  

    // }

    // Now we will automatically set the dark mode enable and disable for our card //

    // This is for setting the state for styling //

    const [myStyle, setMystyle] = useState({
        color: 'white',
        backgroundColor: 'black',
        width: '18rem'
    })

    // Defining the event handler giveColor//

    const giveColor = () => {
        if (myStyle.color === 'white') {
            setMystyle({
                color: 'blue',             
                backgroundColor: 'white',
                width: '18rem'
            })
            setBtntext('Enable dark mode')
        }
        else {
            setMystyle({
                color: 'white',
                backgroundColor: 'blue',
                width: '18rem'
            })
            setBtntext('Enable light mode')
        }
    }
    
    // This is for the button state change //

    const [btntext, setBtntext] = useState('Enable dark mode')

    return (

        <div class="card" style={myStyle} >
            <div class="card-body">
                <h5 class="card-title">My card</h5>
                <h6 class="card-subtitle mb-2 text-muted">Content</h6>
                <p class="card-text">This is the content of the card and is the red card.</p>
                <button onClick={giveColor} type="button" class="btn btn-primary">{btntext}</button>
            </div>
        </div>
    )
}

export default One
