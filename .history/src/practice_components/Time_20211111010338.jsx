import React ,{useState} from 'react'

function Time() {


   const today = new Date().toLocaleTimeString();

   const[time  , setTime] = useState()

    const handleChange = () => {
        console.log("clicked")
    }


    return (
        <>
          <h1>{today}</h1>  
          <button onClick={handleChange}>GET TIME</button>
        </>
    )
}

export default Time
