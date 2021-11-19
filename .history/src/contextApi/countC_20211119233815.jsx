import React from 'react'
import { FirstName } from './CountA'
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
