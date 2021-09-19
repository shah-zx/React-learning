import React from 'react'

function Columns() {
    const items = []
    return (
        <React.Fragment>
        {
         items.map( item => (
         <React.Fragment key={item.id}>
         <h1>Titles</h1>
         </React.Fragment>
         ))
        }
            <td>Name</td>
            <td>Shahnawaz</td>
        </React.Fragment>
    )
}

export default Columns
