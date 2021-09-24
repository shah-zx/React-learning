// Here we will make a click counter //

import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
class Clickcounter extends Component {


    render() {
        const { count, incrementCount } = this.props
        return (

            <button onClick={incrementCount}>Clicked {count} times</button>

        )
    }
}

export default UpdatedComponent(Clickcounter)

// const newComponent = higherOrderComponent(OriginalComponent) // 
// const EnhancedComponent = higherOrderComponent(OriginalComponent)
// For example = const IronMan = suit(TonyStark) //
// The above is the way higherOrderComponent works //

