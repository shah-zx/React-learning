import React ,{useState} from 'react'
import Todolist from './Todolist'

function App() {
    

    const [liText , setliText] = useState("")
    const [lists , setList] = useState([])
    const handleChange = (event) => {
        
        // console.log(event.target.value)
        setliText(event.target.value)
    }
    const handleClick = (event) => {
        setList([...lists , liText])   // Here we are providing the array with the strings (i.e , lists is the arrayand litext is the item)
        setliText(event.target.value)
    }

    return (
        <div className="main_div">
        <div className="center_div">
            <br />
            <h1>Todo List</h1>
            <br />
            <input type="text" className="" placeholder = "Add an Item" onChange={handleChange}/>
            <button onClick = {handleClick}> + </button>
            <ol>
            {lists.map(li => {
               return <Todolist text = "li"/>
            })}
            </ol>
        </div>
            
        </div>
    )
}

export default App
