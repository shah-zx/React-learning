import React from 'react'

function Time() {

    const handleChange = () => {
        console.log("clicked")
    }


    return (
        <>
          <h1></h1>  
          <button onClick={handleChange}>GET TIME</button>
        </>
    )
}

export default Time
