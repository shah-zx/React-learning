import React from 'react'

function Dclock() {

   let time = Date().toLocaleTimeString();

    return (
        <>
            <h1>{time}</h1>
        </>
    )
}

export default Dclock
