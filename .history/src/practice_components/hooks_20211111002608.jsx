import React from 'react'


function Hooks() {


    let count = 0  // Initial value for count 


    const handleChange = () => {
        console.log("clicked")
        count = count + 1
    }



    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleChange}>Click me</button>
        </>
    )
}

export default Hooks
