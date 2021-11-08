import react from 'react';
import noteContext from './NoteContext'

const NotesState = () => {
    const state = {
        "name" : "Shahnawaz" , 
        "class" : "5a"
    }
    return (
        <NotesState.provider value = {state}>
            {props.children}
        </NotesState.provider>


    )
}