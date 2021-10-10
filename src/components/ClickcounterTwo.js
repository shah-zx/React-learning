import React, { Component } from 'react'

class ClickcounterTwo extends Component {
    
    render() {
        const { count , incrementCount} = this.props
        return (
            <button onClick={incrementCount}>Clicked {count} times</button>
        )
    }
}

export default ClickcounterTwo
