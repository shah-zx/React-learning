import React from 'react'

function Todolist(props) {
   
    const deleteItems = () => {
        console.log('deleted')
    }
    return (
        <div className="todolist">
        <li>
        <i className = "fa fa-times" aria-hidden = "true" onClick = {onSelect} />
        {props.text}</li>
        </div>
        );
        
}

export default Todolist
