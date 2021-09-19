import React from 'react'

// This is written in jsx //

const Hello = () => {
    // return (
    //     <div className = 'Kuchbhi'>
    //         <h1>Hello shahnawaz !!!</h1>
    //     </div>
    // )

// Not in jsx //

    return React.createElement(
        'div',
        { id: 'hello', className: 'thishello' },
        React.createElement('h1', null, 'Hello shahnawaz')
    )   // This is the code without jsx //
}

export default Hello

