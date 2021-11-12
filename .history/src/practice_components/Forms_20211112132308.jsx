import React, { useState } from 'react'



function Forms() {

    const [fullName, setfullName] = useState({
        fname : "" , 
        lname : "" , 
    });

    const inputEvent = (event) => {  // We are passing the text we will be weiting in the input in an object called event
        // setName(event.target.value)
    };

    const onSubmits = (event) => {
        event.preventDefault();
        alert('Form submitted successfully')
    }


    const handleChange = () => {
        // setFullName(name);
    }
    return (
        <>
        <div className="main_div">
        <form onSubmit = {onSubmits}>
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <input type="text"
                placeholder="Type here"
                value={fullName.fname}
                onChange={inputEvent}
                name = "fname">    
                </input>
            <button onClick={handleChange}
                type="submit">Click me </button>
            <br />
            <input type="text"
                placeholder="Type here"
                value={fullName.lname}
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
//    console.log(event.target.value)  // accessing our text 
