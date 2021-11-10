import React ,{useState} from 'react'

function Time() {


   const today = new Date().toLocaleTimeString();

   const[time  , setTime] = useState(today)

    const handleChange = () => {
        console.log("clicked")
        todays = new Date().toLocaleTimeString();
        setTime(todays);
    }


    return (
        <>
          <h1>{time}</h1>  
          <button onClick={handleChange}>GET TIME</button>
        </>
    )
}

export default Time
