import react from 'react';
import noteContext from './NoteContext'

const NotesState = () => {
    return (
        <NotesState.provider>
        {props.children}
        </NotesState.provider>


    )
}