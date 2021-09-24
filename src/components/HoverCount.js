import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
class HoverCount extends Component {


    render() {
        const { count, incrementCount } = this.props

        return (

            <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>

        )
    }
}

export default UpdatedComponent(HoverCount)
