import React  from 'react'
import CountC from './CountC'
// import CountB from './CountB'
import FirstName from './Mycontext'
// const FirstName = React.createContext();


function countA() {
    return (
        <FirstName.Provider value1={"Shahnawaz"} value2 = {"sayyed"}>
         <CountC /> 
      </FirstName.Provider>
    )
}

export default countA
