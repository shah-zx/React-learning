import React , {useState} from 'react'

function Login() {
    

    const [fullName , setfullName] = useState({
      fname : "", 
      lname : "",
    })


    const onSubmit = (event) => {
      event.preventDefault()
      alert("Form submitted")
    }

    const handleThat = (event) => {
      console.log(event.target.value)
      setName(event.target.value);
    }


  
    return (
        <>
        <div className="main_div">
        <form onSubmit = {onSubmit} />
          <h1>Hello</h1>
          <input 
          onChange={handleThat} 
          type = "text" placeholder = "type your username"
          value = "fname">
          </input>
          <br/>
          <input type = "text" 
          onChange = {handleThat}
          palceholder = "type your password"
          value = "lname">
          </input>
          <button onClick = {handleChange} >Submit</button>
          </div>
        </>
    )
}

export default Login

