import React from 'react'
import CountB from './CountB'
const FirstName = React.createContext();


function countA() {
    return (
        <FirstName.Provider>
      <CountB /> 
      </FirstName.Provider>
    )
}

export default countA
