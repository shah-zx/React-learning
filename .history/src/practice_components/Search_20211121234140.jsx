import React  , {useState} from 'react'

function Search() {
    const array = ["bhindi" , "pyaaz" , "aloo" , "tamatar" , "shimlamirch" , "cauliflwoer" , "carrot" , "begun" , "palak"]

    const [text , setText] = useState("")
    const handleThat = (event) => {
        // console.log(event.target.value)
        setText(event.target.value)
    }
    const handleChange = (event) => {
        if (text === array.map((x)=> {return ( x === event.target.value)
            })) {
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
