import React from 'react'
import { FirstName } from './Mycontext'
function CountC() {
    return (
        <>
            <FirstName.Consumer>
             {(value) => {
                return <h1>Hello there {value}</h1>
            }}
            </FirstName.Consumer>
        </>
    )
}

export default CountC
