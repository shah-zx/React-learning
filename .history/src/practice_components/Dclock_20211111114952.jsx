import React , {useState} from 'react'

function Dclock() {

   let time = new Date().toLocaleTimeString();

   const[ctime , setTime] = useState(time)

   const updateTime = () => {
      let newtime = new Date().toLocaleTime
      setTime(newtime)
   }

   setInterval(updateTime,1000)

    return (
        <>
            <h1>{ctime}</h1>
        </>
    )
}

export default Dclock
