import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

function Count() {


    // let count = 0;

    const [count, setCount] = useState(0)

    const handleClick = () => {
        console.log("Increased")
        setCount(count + 1)
    }

    const handleClick2 = () => {
        console.log("decreased")
        setCount(count - 1)
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
