import React , {useContext} from "react";
import noteContext from "../context/notes/NoteContext";

const Greet = props => {
    const a = useContext(noteContext)
    const {name, heroName} = props  // Destructurig the props in functional components //
    // console.log(props)
    return (
        <div>
           This is about {a.name}
        </div>
    )
}



// This is our greeting function , after creating it , we have to export it to the App.js 

export default Greet

