// Here we are making a navbar component //

import React from 'react'
import PropTypes from 'prop-types' // Importing the proptypes from props //
export default function Navbar(props) {

    return (
        <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.title}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.Abouttext}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.cont}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">{props.hello}</a>
        </li>
      </ul>
    )
}
Navbar.propTypes = {      // These are our navbar properties //
                      title : PropTypes.string.isRequired ,
                      Abouttext : PropTypes.string 
                   }

Navbar.defaultProps = {title : 'set title here' ,
                        Abouttext : 'set abouttext here'
                    }
                                          