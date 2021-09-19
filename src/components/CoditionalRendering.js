// If else
// Element variables
// Ternary conditional operator
// Short circuit opeartor 

import React, { Component } from 'react'

export class CoditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {


        // short circuitry //

        // return this.setState.isLoggedIn && <div> Welcome shahnawaz</div>

        // Ternary operation approach //

        return (
            this.state.isLoggedIn ?
                <div>Welcome shahnawaz</div> :
                <div>Welcome guest</div>
        )


        // environment variables approach //
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome man !!</div>
        // } else {
        //     message = <div>Welcome guest</div>
        // }
        // return <div>{message}</div>;

        // if esle approach //

        //     if (this.state.isLoggedIn) {
        //         return (
        //             <div>
        //                 Welcome shahnawaz
        //             </div>
        //         )
        //     } else {
        //         return (
        //             <div>
        //                 Welcome guest
        //             </div>
        //         )
        //     }
        // }
        // return (
        //     <div>
        //         <div>Welcome shahnawaz </div>
        //         <div>Welcome guest</div>
        //     </div>
        // )
    }
}

export default CoditionalRendering
