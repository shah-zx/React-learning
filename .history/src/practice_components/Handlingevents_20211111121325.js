import React , {useState} from 'react'

function Handlingevents() {

    const [text , setText] = useState("Don't click 👊")

    const handleChange = () => {
        setText("Ouch!! 🤕")
    }

    return (
        <>
         <button onClick={handleChange} onDoubleClick = {newChnage}>{text}</button>   
        </>
    )
}

export default Handlingevents
