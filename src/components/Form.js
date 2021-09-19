// Here we will be learning about the forms in react // 

import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: ''
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicsChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {

        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topics</label>
                    <select value={this.state.topic} onChange={this.handleTopicsChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="express">Express</option>

                    </select>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form
