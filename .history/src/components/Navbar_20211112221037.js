// Here we are making a navbar component //

import React from 'react'
import PropTypes from 'prop-types' // Importing the proptypes from props //
import {Link} from 'react-router-dom' // Importing the Link  , thing to remember : exporting not as DEFAULT //
import Dclock from '../practice_components/Dclock'
export default function Navbar(props) {

    return (
        <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.title}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">{props.Abouttext}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">{props.cont}</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link">{props.hello}</a>
        </li>
      </ul>
      <Dclock/>
    )
}
Navbar.propTypes = {      // These are our navbar properties //
                      title : PropTypes.string.isRequired ,
                      Abouttext : PropTypes.string 
                   }

Navbar.defaultProps = {title : 'set title here' ,
                        Abouttext : 'set abouttext here'
                    }
                                          
                    