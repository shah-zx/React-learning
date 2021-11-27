import React  , {useState} from 'react'

function Hi() {

    const [text , setText]  = useState("Hello shahnawaz")
    const handleChange = () => {
         setText("How are you?")
    }
    return (
        <div>
           <h1>{text}</h1> 
           <button onClick={handleChange}>Click 👍</button>
        </div>
    )
}

export default Hi