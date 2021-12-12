import React, { Component } from 'react'
// import Regularcomp from './Regularcomp'
// import Purecomponents from './Purecomponents'
import MemoComp from './MemoComp'

export class Parentcomp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'shahnawaz'
        }
    }

    componentDidMount() {
        setInterval(() => {
        this.setState({
            name: 'shahnawaz'
        })
         }, 2000)
    }

    render() {
        console.log('Parentcomp')
        return (
            <div>
                parent comp
                <MemoComp name= {this.state.name} />
                {/* <Regularcomp name={this.state.name} />
                <Purecomponents name={this.state.name} /> */}
            </div>
        )
    }
}

export default Parentcomp
