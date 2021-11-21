import React  , {useState} from 'react'

function Hi() {

    const [text , setText]  = useState("")
    const handleChange = () => {

    }
    return (
        <div>
           <h1>Hi visitor</h1> 
           <button onClick={handleChange}></button>
        </div>
    )
}

export default Hi