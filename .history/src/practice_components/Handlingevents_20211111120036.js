import React , {useState} from 'react'

function Handlingevents() {

    const [text , setText] = useState("Don't click ")

    const handleChange = () => {
        setText("Ouch!! 🤕")
    }

    return (
        <>
         <button onClick={handleChange}>Don't click</button>   
        </>
    )
}

export default Handlingevents
