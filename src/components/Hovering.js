import React, { Component } from 'react'

export class Hovering extends Component {



    render() {
        const { count  , incrementCount } = this.props
        return (
            <h2 onMouseOver={incrementCount}>Incrementing hamza's age : {count} </h2>
        )
    }
}

export default Hovering
