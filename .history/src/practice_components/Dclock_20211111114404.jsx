import React from 'react'

function Dclock() {

   let time = new Date().toLocaleTimeString();

   const[time , setTime] = useState(time)

    return (
        <>
            <h1>{time}</h1>
        </>
    )
}

export default Dclock
