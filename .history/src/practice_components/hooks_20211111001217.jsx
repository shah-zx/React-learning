import React from 'react'

let count = 1

const handleChange = () => {
    console.log("clicked")
}


function Hooks() {
    return (
        <>
          <h1>{count}</h1>
          <button onClick = {handleChange}>Click me</button>
        </>
    )
}

export default Hooks
