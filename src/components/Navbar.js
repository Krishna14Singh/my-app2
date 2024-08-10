// rfc for react function based component
import React from 'react'
//impt for import PropTypes from 'prop-types'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    // backticks lgane pdenge props k liye yha and javascript k liye curly braces
    <nav className={`navbar navbar-expand-lg navbar-${props.mode==="light"?"light":"dark"} bg-${props.mode==="light"?"light":"dark"}`}>
    <div className="container-fluid" style={{color:props.mode==='dark'?'white':props.mode==='brown'?'white':props.mode==='green'?'white':'black'}}>
        {/* props.title me title daal skte hai directly from App.js */}
      <Link className="navbar-brand mx-3" to="/">{props.title}</Link>

      <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to="About/">{props.aboutText}</Link> 
          </li>
  
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          {/* remove outline to make all green */}
          {/* <button className="btn btn-outline-success" type="submit">Search</button>
        </form>  */}
        {/* text-light to make content white */}
        <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"} mx-2`}>
          <input className="form-check-input "  disabled={props.toggle2 || props.toggle3} type="checkbox" role="switch" onClick={props.toggleModeBrown} id="flexSwitchCheckDefault"/>
          <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?"Brown":"light"}</label>
        </div>
        <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"} mx-2`}>
          <input className="form-check-input"  disabled={props.toggle1 || props.toggle3} type="checkbox" role="switch" onClick={props.toggleModeDark} id="flexSwitchCheckDefault"/>
          <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?"Dark":"light"}</label>
        </div>
        <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"} mx-2`}>
          <input className="form-check-input"  disabled={props.toggle1 || props.toggle2} type="checkbox" role="switch" onClick={props.toggleModeGreen} id="flexSwitchCheckDefault"/>
          <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?"Green":"light"}</label>
        </div>


      </div>
    </div>
  </nav>
  )
}

//proptype means props k type kya hai eg. integer/string etc
//title and aboutText k proptype string hi hona chahiye
Navbar.propTypes={title:PropTypes.string.isRequired, //isRequired means ye value deni hi pdegi vrna error ayega console me
    aboutText:PropTypes.string.isRequired}


// for default props- kaunsi values fix kre agr value na mile props ko
// Navbar.defaultProps={
//     title: 'Set title',
//     aboutText: 'about text here'
// }