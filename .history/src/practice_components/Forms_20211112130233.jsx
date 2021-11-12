import React, { useState } from 'react'



function Forms() {

    const [name, setName] = useState()
    const [fullName, setFullName] = useState()
    
    const 

    const inputEvent = (event) => {  // We are passing the text we will be weiting in the input in an object called event
        //    console.log(event.target.value)  // accessing our text 
        setName(event.target.value)
    };

    const handleChange = () => {
        setFullName(name);
    }
    return (
        <>
        <div className="main_div">
        <form onSubmit = {onSubmits}>
            <h1>Hello</h1>
            <input type="text"
                placeholder="Type here"
                value={fname}
                onChange={inputEvent}
                name = "fname">    
                </input>
            <button onClick={handleChange}
                type="submit">Click me </button>
            <br />
            <input type="text"
                placeholder="Type here"
                value={lname}
                onChange={inputEvent}
                name = "lname">
                </input>
            <button onClick={handleChange}
                type="submit">Click me </button>
                </form>
                </div>
        </>
    )
}

export default Forms

// Note : as we do for button , which is onClick , we do for input field also : that is onChange