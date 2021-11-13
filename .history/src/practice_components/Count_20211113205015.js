import React  , {useState} from 'react'

function Count() {

    const[count , setCount] = useState()

   const handleClick = () => {

   }


    return (
        <div>
            <h1>0</h1>
            <button onClick={handleClick}>Increase</button>
        </div>
    )
}

export default Count
