import React, { useState } from 'react'

function Login() {

  const [name, setName] = useState("")

  const [lastName, setLastName] = useState("");

  const [fullName, setfullName] = useState()

  const [lastNamenew , setlastNamenew] = useState("")

  const onSubmits = (event) => {
    event.preventDefault();  // This will help in preventing the default behaviour of the form 
    setfullName(name)
    setlastNamenew(lastName)
  }

  const handleThat = (event) => {
    console.log(event.target.value)
    // console.log(event.target.name)
    setName(event.target.value);
  }

  const handleThattwo = (event) => {
    setLastName(event.target.value)
  }

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <h1>Hello {fullName} {lastNamenew}</h1>
          <input
            onChange={handleThat}
            type="text"
            placeholder="type your first name"
            value={name}>
          </input>
          <br/>
          <input 
          type = "text" 
          onChange = {handleThattwo}
          placeholder = "type your last name"
          value = {lastName}>
          </input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login

