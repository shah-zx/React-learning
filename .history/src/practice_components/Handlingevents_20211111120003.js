import React , {useState} from 'react'

function Handlingevents() {

    const [text , setText] = useState(text)

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
