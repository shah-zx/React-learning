import React ,{useState} from 'react'

function App() {
    

    const [name ,setName] = useState("")
    const [liText , setliText] = useState("")
    const [lists , setList] = useState([])
    const handleChange = (event) => {
        
        // console.log(event.target.value)
        setliText(event.target.value)
    }
    const handleClick = (event) => {
        setList([...lists , liText])
        console.log("clicked")
        console.log(liText)
        setliText(event.target.value)
    }

    return (
        <div className="main_div">
        <div className="center_div">
            <br />
            <h1>Todo List</h1>
            <br />
            <input type="text" className="" placeholder = "Add an Item"/>
            <button onClick = {handleClick}> + </button>
            <ol>
            {lists.map(li => {
                return <li></li>
            })}
            </ol>
        </div>
            
        </div>
    )
}

export default App
