import React , {useState} from 'react'

function Login() {
    

    const [name , setName] = useState("")

    const handleThat = (event) => {
       event.preventDefault()
    }


  
    return (
        <>
        <div className="main_div">
        <form onSubmit = {onSubmit} />
          <h1>Hello</h1>
          <input 
          onChange={handleThat} 
          type = "text" placeholder = "type your username"
          name = "fname">
          </input>
          <br/>
          <input type = "text" 
          onChange = {handleThat}
          palceholder = "type your password"
          name = "lname">
          </input>
          <button onClick = {handleChange} >Submit</button>
          </div>
        </>
    )
}

export default Login

