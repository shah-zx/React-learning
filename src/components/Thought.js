import React  , {Component} from 'react'

class Thought extends Component 
{ 

   constructor(){ 
       super()
       this.state = 
       {
           message: 'Thought'
       }
   }

   changeMessage() {
       this.setState(
       {
           message: 'Sun rises in the east'
       })
   }


    render () {
        return(
                  <div>
                      <h1>{this.state.message}</h1>
                      <button onClick={() => this.changeMessage()}>Thoughts</button>
                  </div>
        )
    }
}

export default Thought