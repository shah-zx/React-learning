import react from 'react';
import noteContext from './noteContext'

const NotesState = (props) => {
    const state = {
        "name": "Shahnawaz",
        "class": "5a"
    }
    return (
        <noteContext.Provider value={state}>
            {props.children}
        </noteContext.Provider>


    )
}

export default NotesState;
