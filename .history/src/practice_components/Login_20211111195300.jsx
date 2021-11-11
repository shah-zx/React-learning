import React , {useState} from 'react'

function Login() {
    

    const [text , setText] = useState()

    const handleThat = (event) => {
       
    }


    const handleChange = () => {

    }
    return (
        <>
        <div className="main_div">
          <h1></h1>
          <input onChange={handleThat} type = "text" placeholder = "type your username"></input>
          <input type = "text" palceholder = "type your password"></input>
          <button onClick = {handleChange} >Submit</button>
          </div>
        </>
    )
}

export default Login
