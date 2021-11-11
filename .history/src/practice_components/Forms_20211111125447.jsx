import React from 'react'

function Forms() {
    const inputEvent = ()=>{

    };
    return (
        <>
            <h1>Hello</h1>
            <input type="text" placeholder="Type here" onChange = {inputEvent}></input>
            <button type="submit">Click me </button>
        </>
    )
}

export default Forms

// Note : as we do for button , which is onClick , we do for input field also : that is 