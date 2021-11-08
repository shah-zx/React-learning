import react from 'react';
import NoteContext from './NoteContext'

const NotesState = () => {
    const state = {
        "name": "Shahnawaz",
        "class": "5a"
    }
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>


    )
}

export default NotesState;