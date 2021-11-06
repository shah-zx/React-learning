import React from 'react'

function Textarea() {
    return (
        <div class="input-group mb-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input type="submit" aria-label="Checkbox for following text input" />
          </div>
        </div>
        <input type="text" class="form-control" aria-label="Text input with checkbox"/>
      </div>
    )
}

export default Textarea
