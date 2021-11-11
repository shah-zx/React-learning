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
      // setName(event.target.value);
    }


  
    return (
        <>
        <div className="main_div">
        <form onSubmit = {onSubmit} />
          <h1>Hello {fullName.fname}{fullName.lname}</h1>
          <input 
          onChange={handleThat} 
          type = "text" placeholder = "type your username"
          value = {fullName.fname}>
          </input>
          <br/>
          <input type = "text" 
          onChange = {handleThat}
          palceholder = "type your password"
          value = {fullName.lname}>
          </input>
          <button type = "submit">Submit</button>
          </div>
        </>
    )
}

export default Login

