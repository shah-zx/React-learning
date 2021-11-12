import React ,{useState} from 'react'

function App() {
    

    const [name ,setName] = useState("")
    const [liText , setliText] = useState("")

    const handleChange = (event) => {
        // console.log(event.target.value)
        setliText(event.target.name)
    }
    const handleClick = (event) => {
        console.log("clicked")
        setName(name)
    }

    return (
        <div className="main_div">
        <div className="center_div">
            <br />
            <h1>Todo List</h1>
            <br />
            <input type="text" className="" placeholder = "Add an Item" onChange = {handleChange} name = "fname"/>
            <button onClick = {handleClick}> + </button>
            <ol>
                <li>{liText}</li>
            </ol>
        </div>
            
        </div>
    )
}

export default App
