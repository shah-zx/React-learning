import React from 'react'
import FirstName from './Mycontext'
function CountC() {
    return (
        <>
            <FirstName.Consumer>
             {(fname) => {
                return <h1>Welcome{fname}</h1>
            }}
            </FirstName.Consumer>
        </>
    )
}

export default CountC
