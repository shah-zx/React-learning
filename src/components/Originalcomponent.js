import React from 'react'

const Ucomponent = (Orcomponent) => {
    class Baap extends React.Component {

        constructor(props) {
            super(props)

            this.state = {
                message: 'button'
            }

            render()
            {

                return (
                    <Orcomponent message={this.state.message} />
                )
            }
        }
    }
    return Baap

}

export default Ucomponent;