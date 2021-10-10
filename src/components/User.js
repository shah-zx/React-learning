import React, { Component } from 'react'

export class User extends Component {
    render() {
        return (
            <div>
                {this.props.render(true)}  
            </div>
        )
    }
}

export default User
/* Here we see that that name instead of being a property is a function */
/* Render props refer to a technique for sharing code between react components using a prop whose value is a finction. */
