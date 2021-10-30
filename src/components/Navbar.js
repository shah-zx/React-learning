// Here we are making a navbar component //

import React from 'react'

export default function Navbar(props) {
    return (
        <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">{props.title}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{props.Abouttext}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{props.cont}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">{props.hello}</a>
        </li>
      </ul>
    )
}
