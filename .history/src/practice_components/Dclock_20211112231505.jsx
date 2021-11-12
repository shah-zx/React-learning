import React , {useState} from 'react'

function Dclock() {

   let time = new Date().toLocaleTimeString();

   const[ctime , setTime] = useState(time)

   const updateTime = () => {
      let newtime = new Date().toLocaleTimeString();
      setTime(newtime)
   }

   setInterval(updateTime,1000) // This function will take a call back function and the interval after which the event will take place 

    return (
        <>
            <h3 className = "col-md-8" style={{color : "blue" , fontSize : "20px"}}>{ctime}</h3>
        </>
    )
}

export default Dclock
