import React , { useState } from 'react'

function Textarea(props) {

   


    const handleChange =() => {
         console.log("handleChange click")
    }


    return (
        <div class="input-group mb-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input onClick = {handleChange} type={props.st} aria-label="Checkbox for following text input" />
          </div>
        </div>
        <input type="text" class="form-control" aria-label="Text input with checkbox"/>
      </div>
    )
}

export default Textarea
