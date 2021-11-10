import React from 'react'

const handleChange = () => {
    console.log("clicked")
}


function Hooks() {
    return (
        <>
          <h1>0</h1>
          <button onClick = {handleChange}>Click me</button>
        </>
    )
}

export default Hooks
