import React ,{useState} from 'react'

function App() {
    const handleChange = (event) => {
        console.log(event.target.value)
    }

    const [name ,setName] = useState("")

    return (
        <div className="main_div">
        <div className="center_div">
            <br />
            <h1>Todo List</h1>
            <br />
            <input type="text" className="" placeholder = "Add an Item" onChange = {handleChange} />
            <button> + </button>
            <ol>
                <li></li>
            </ol>
        </div>
            
        </div>
    )
}

export default App
