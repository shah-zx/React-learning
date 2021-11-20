import React from 'react'
import FirstName from './Mycontext'
function CountC() {
    return (
        <>
            <FirstName.Consumer>
             {(fname) => {
                return (
                    <LastName.Consumer> {(lname) => {
                       return (
                    <h1>Welcome {fname} {lname}</h1>
                       )
                    }} </LastName.Consumer>
                )
            }}
            </FirstName.Consumer>
        </>
    )
}

export default CountC
