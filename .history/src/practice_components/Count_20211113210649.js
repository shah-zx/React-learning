import React, { useState } from 'react'

function Count() {


    // let count = 0;

    const [count, setCount] = useState(0)

    const handleClick = () => {
        console.log("clicked")
        setCount(count + 1)
    }

    const handleClick2 = () => {
        console.log(decreased)
    }



    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Increase</button>
            <button onClick={handleClick2}>Decrease</button>
        </div>
    )
}

export default Count
