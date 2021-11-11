import React from 'react'

function Login() {
    
    const handleThat  = (event) => {

    }


    const handleChange = () => {

    }
    return (
        <>
          <h1></h1>
          <input oChange={handleThat} type = "text" placeholder = "type your username"></input>
          <input type = "text" palceholder = "type your password"></input>
          <button onClick = {handleChange} >Submit</button>
        </>
    )
}

export default Login
