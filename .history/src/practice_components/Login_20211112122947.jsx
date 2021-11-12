import React, { useState } from 'react'

function Login() {

  const [name, setName] = useState("")


  const [fullName, setfullName] = useState()


  const onSubmits = (event) => {
    event.preventDefault();  // This will help in preventing the default behaviour of the form 
    setfullName(name)
  }

  const handleThat = (event) => {
    console.log(event.target.value)
    // console.log(event.target.name)
    setName(event.target.value);
  }



  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <h1>Hello {fullName}</h1>
          <input
            onChange={handleThat}
            type="text"
            placeholder="type your username"
            value={name}>
          </input>
          <br/>
          <input type = "text" 
          onChange = {handleThat}
          palceholder = "type your password"
          name = "lname" 
          value = {fullName.lname}>
          </input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login

