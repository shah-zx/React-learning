import React  , {useState} from 'react'

function Search() {
    const array = ["bhindi" , "pyaaz" , "aloo" , "tamatar" , "shimlamirch" , "cauliflwoer" , "carrot" , "begun" , "palak"]
    const [text , setText] = useState("")
    const handleThat = (event) => {
        console.log(event.target.value)
    }

    return (
        <div>
            <input onChange = {handleThat} type="text" placeholder = "search here "/>
        </div>
    )
}

export default Search
