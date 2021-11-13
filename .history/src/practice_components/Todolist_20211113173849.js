import React from 'react'

function Todolist(props) {
   
    const deleteItems = () => {
        console.log('deleted')
    }
    return (
        <div className="todolist">
        <li>
        <i class = "fa fa-times" aria-hidden = "true" onClick = {deleteItems} />
        {props.text}</li>
        </div>
        );
        
}

export default Todolist
