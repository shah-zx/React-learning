import { waitForElement } from '@testing-library/dom'
import React, { Component } from 'react'

class Practice1 extends Component {
    render() {
        
            const {naam , herokanaam} = this.props
            return <h1>{naam} and {herokanaam}</h1>  , 
                   <p>Hello ji hello {naam} {herokanaam}</p> ,
                   <ul></ul>
        
    }
}

export default Practice1
