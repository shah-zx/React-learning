import react , {useState} from 'react';
import noteContext from './noteContext'

const NotesState = (props) => {
    const s1 = {
        "name": "Shahnawaz",
        "class": "5a"
    }
    const [state, setState] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "hamza",
                "class": "12a"
            })
        }, 1000);
    }
    return (
        <noteContext.Provider value={{state , update}}>
            {props.children}
        </noteContext.Provider>


    )
}

export default NotesState;
