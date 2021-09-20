import React, { Component } from 'react';

class Practice2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'This is the message before click'
        }
    }

    changeMessage() {
        this.setState({ message: 'This is the message after click' })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Click me</button>
            </div>
        )
    }
}

export default Practice2