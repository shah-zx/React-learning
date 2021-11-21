import React from 'react'

function Search() {

    const handleThat = (event) => {
        console.log(event.target.value)
    }

    return (
        <div>
            <input onChange = {handleThat} type="text" placeholder = "search here" />
        </div>
    )
}

export default Search
