import React  , {useState} from 'react'

function Hi() {

    const [text , setText]  = useState("Hello shahnawaz")
    const handleChange = () => {
         setText()
    }
    return (
        <div>
           <h1>{text}</h1> 
           <button onClick={handleChange}></button>
        </div>
    )
}

export default Hi