import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet parent</button> */}
            <button onClick= {() => props.greetHandler('child')}>Greet parent</button>
        </div>
    )
}

export default ChildComponent
