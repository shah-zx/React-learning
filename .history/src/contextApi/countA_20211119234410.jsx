import React  from 'react'
// import CountB from './CountB'
import FirstName from './Mycontext'
// const FirstName = React.createContext();


function countA() {
    return (
        <FirstName.Provider value={"Shahnawaz"}>
         <CountB /> 
      </FirstName.Provider>
    )
}

export default countA
