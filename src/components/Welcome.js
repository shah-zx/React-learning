import React , {Component} from "react";  // For using the class component we have to import React as well as the component //


class Welcome extends Component {   

    render() {   // Render gives us the html code //
        const {name , heroName} = this.props
        // const {state1 , state2} = this.state
        return <h1>{name} and {heroName}</h1>
    }
}


export default Welcome
