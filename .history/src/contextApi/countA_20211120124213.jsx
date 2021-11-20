import React  from 'react'
import CountC from './CountC'
// import CountB from './CountB'
import FirstName from './Mycontext'
// const FirstName = React.createContext();


function countA() {
    return (
        <FirstName.Provider value={"Shahnawaz"}>
        <LastName.Provider value={""}>
         <CountC /> 
         </LastName.Provider>
      </FirstName.Provider>
    )
}

export default countA
