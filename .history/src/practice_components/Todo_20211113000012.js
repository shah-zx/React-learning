import React ,{useState} from 'react'

function App() {
    

    const [name ,setName] = useState("")
    const [liText , setliText] = useState("")

    const handleChange = (event) => {
        // console.log(event.target.value)
        // setliText(event.target.valu)
    }
    const handleClick = (event) => {
        console.log("clicked")
        console.log(liText)
        setliText(liText)
    }

    return (
        <div className="main_div">
        <div className="center_div">
            <br />
            <h1>Todo List</h1>
            <br />
            <input type="text" className="" placeholder = "Add an Item" onChange = {handleChange}/>
            <button onClick = {handleClick}> + </button>
            <ol>
                <li>{liText}</li>
            </ol>
        </div>
            
        </div>
    )
}

export default App
