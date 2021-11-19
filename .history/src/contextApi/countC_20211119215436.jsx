import React from 'react'
import { FirstName } from './CountA'
function countC() {
    return (
            <FirstName.Consumer> {(fname) =>{
            return <h1></h1>
             }}</FirstName.Consumer>
    )
}

export default countC
