import React , {useState} from 'react'

function Dclock() {

   let time = new Date().toLocaleTimeString();

   const[ctime , setTime] = useState(time)

    return (
        <>
            <h1>{time}</h1>
        </>
    )
}

export default Dclock
