import React , {useState} from 'react'


function Hooks() {


    // let count = 0  // Initial value for count 
    // Using the useState for updating the state of the button 
    const state = useState();
    const[count , setCount] = useState(0)


    const handleChange = () => {
        setCount(count+1)
        console.log("clicked")
    }



    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleChange}>Click me</button>
        </>
    )
}

export default Hooks
