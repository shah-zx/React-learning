import React  , {useState} from 'react'

function Search() {
    const array = ["bhindi" , "pyaaz" , "aloo" , "tamatar" , "shimlamirch" , "cauliflwoer" , "carrot" , "begun" , "palak"]

    const [text , setText] = useState("")
    const handleThat = (event) => {
        // console.log(event.target.value)
        setText(event.target.value)
    }
    const handleChange = () => {
        const index = array.findIndex((arr)=> arr === text)
        console.log( text , index)
        if (text === array[index] ) {
        setText("Yes i am here")            
        }
        else
        {
            setText("No i am not here")
        }
         
    }

    return (
        <div>
            {/* <h1>Hello there {text} here</h1> */}
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
