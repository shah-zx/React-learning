import React  , {useState} from 'react'

function Search() {
    const array = ["bhindi" , "pyaaz" , "aloo" , "tamatar" , "shimlamirch" , "cauliflwoer" , "carrot" , "begun" , "palak"]

    const [text , setText] = useState("")
    const handleThat = (event) => {
        // console.log(event.target.value)
        setText(event.target.value)
    }

    return (
        <div>
            <input onChange = {handleThat}
             type="text"
             placeholder = "search here "
             value = {text}
             />
            <button onClick = {handleChange}>Click</button>
        </div>
    )
}

export default Search
