import React ,{useState} from 'react'

function Time() {

   const[time  , setTime] = useState()

    const handleChange = () => {
        console.log("clicked")
    }


    return (
        <>
          <h1>{Date()}</h1>  
          <button onClick={handleChange}>GET TIME</button>
        </>
    )
}

export default Time
