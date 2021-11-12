import React, { useState } from 'react'

function Login() {

  const [name, setName] = useState("")


  const [fullName, setfullName] = useState({
    fname: "",
    lname: "",
  })


  const onSubmits = (event) => {
    event.preventDefault()
    setfullName(name)
  }

  const handleThat = (event) => {
    console.log(event.target.value)
    console.log(event.target.name)
    // setName(event.target.value);
  }



  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <h1>Hello {fullName.fname}{fullName.lname}</h1>
          <input
            onChange={handleThat}
            type="text"
            placeholder="type your username"
            name="fname"
            value={fullName.fname}>
          </input>
          {/* <br/>
          <input type = "text" 
          onChange = {handleThat}
          palceholder = "type your password"
          name = "lname" 
          value = {fullName.lname}>
          </input> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login

