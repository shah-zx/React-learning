import React, { PureComponent } from 'react'

export class Purecomponents extends PureComponent {
    render() {
        return (
            <div>
                Pure component {this.props.name}
            </div>
        )
    }
}

export default Purecomponents


