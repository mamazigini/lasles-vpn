import React from 'react'
import './Styles/Navbar.css';
import logo from './Assets/logo.png';

function navbar() {
  return (
    <div className='bg_color'> 
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid text_color">
    <div className='navbar-brand logo'>
       <img className='logo1' src={logo} alt=""/>  
       <a className="navbar-brand heading" href="#">Lasles<strong>VPN</strong></a>
    </div>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 side">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#section2">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#section3">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#section4">Testimonial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#section6">Help</a>
        </li>
      </ul>
      <div className="d-flex">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 side">
          <li className="nav-item">
            <a className="nav-link" href="#">Sign in</a>
          </li>
          <li className="nav-item">
            <button className="signup">Sign up</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</div>
  )
}

export default navbar