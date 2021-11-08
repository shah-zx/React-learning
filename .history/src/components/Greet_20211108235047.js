import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import 
const Greet = () => {
    const a = useContext(noteContext)
    useEffect(() => {
        a.update()
    }, [])
    return (
        <div>
            This is about {a.name}
            <br />
            This is his class : {a.class}
        </div>  // Here we are using the context API
    )
}


// const {name, heroName} = props  // Destructurig the props in functional components //
// console.log(props)
// This is our greeting function , after creating it , we have to export it to the App.js 

export default Greet

