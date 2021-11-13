import React from 'react'

function Todolist(props) {
    return (
        <div className="todolist">
        
        <li>{props.text}</li>
        </div>
        );
}

export default Todolist
