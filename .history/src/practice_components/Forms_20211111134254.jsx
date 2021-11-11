import React , {useState} from 'react'



function Forms() {

    const [name , setName] = useState()

    const inputEvent = (event)=>{  // We are passing the text we will be weiting in the input in an object called event
    //    console.log(event.target.value)  // accessing our text 
       setName(event.target.value)
    };

    const handleChange = () => {
      
    }
    return (
        <>
            <h1>Hello {name} </h1>
            <input type="text" placeholder="Type here" value = {name} onChange = {inputEvent}></input>
            <button onClick = {handleChange} type="submit">Click me </button>
        </>
    )
}

export default Forms

// Note : as we do for button , which is onClick , we do for input field also : that is 