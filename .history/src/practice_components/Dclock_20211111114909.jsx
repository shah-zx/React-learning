import React , {useState} from 'react'

function Dclock() {

   let time = new Date().toLocaleTimeString();

   const updateTime = () => {

   }

   setInterval(updateTime,1000)

   const[ctime , setTime] = useState(time)

    return (
        <>
            <h1>{ctime}</h1>
        </>
    )
}

export default Dclock
