import React  , { createContext } from 'react'
import CountB from './CountB'
const FirstName = React.createContext();


function countA() {
    return (
        <FirstName.Provider value={"Shahnawaz"}>
      <CountB /> 
      </FirstName.Provider>
    )
}

export default countA
export {FirstName} 