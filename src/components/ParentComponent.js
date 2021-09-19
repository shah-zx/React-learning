import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} /> 
            </div>
        )
    }
}

export default ParentComponent

 // Methods as props //
 // We are using the methods as properties , for example greetParent is a function which is passed
 // as a property //