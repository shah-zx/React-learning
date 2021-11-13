import React, { useState } from 'react'

function Count() {


    let count = 0;

    const [count, setCount] = useState()

    const handleClick = () => {
        console.log(clicked)
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Increase</button>
        </div>
    )
}

export default Count
