import React , {useContext} from "react";
import NoteContext from "../context/notes/NoteContext";

const Greet = () => {
    const a = useContext(NoteContext)
    // const {name, heroName} = props  // Destructurig the props in functional components //
    // console.log(props)
    return (
        <div>
           This is about {a.name}   
        </div>  // Here we are using the context API
    )
}



// This is our greeting function , after creating it , we have to export it to the App.js 

export default Greet

