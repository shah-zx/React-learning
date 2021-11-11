import React from 'react'

function Login() {
    return (
        <>
          <h1></h1>
          <input type = "text" placeholder = "type your username"></input>
          <input type = "text" palceholder = "type your password"></input>
          <button onClick = {handleChange} >Submit</button>
        </>
    )
}

export default Login
