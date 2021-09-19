import React, { Component } from 'react';

class Eventbind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
    }

    clickHandker() {
        this.setState({
            message: 'Goodbye'
        })
    }

    render() {
        return (

            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandker.bind(this)}>Click me</button>
            </div>


        )
    }
}

export default Eventbind
