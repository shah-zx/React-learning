import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
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
            <Button onClick={handleClick}>
            <AddIcon />
            </Button>
            <button onClick={handleClick2}>
            <RemoveIcon />
            </button>
        </div>
    )
}

export default Count
