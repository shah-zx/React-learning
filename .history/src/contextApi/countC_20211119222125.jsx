import React from 'react'
import { FirstName } from './CountA'
function CountC() {
    return (
        <>
            <FirstName.Consumer>
             {(fname) => {
                return <h1>Hello there {fname}</h1>
            }}
            </FirstName.Consumer>
        </>
    )
}

export default CountC
