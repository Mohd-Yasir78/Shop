import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    
    <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
          <div class="nav-title">
            <span>I</span>rshad
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="nav-links">
          <a><NavLink to='/'>Home</NavLink></a>
          <a><NavLink to='/fertilizer'>Fertilizer</NavLink></a>
          <a><NavLink to='/seed'>Seed</NavLink></a>
          <a><NavLink to='/pesticide'>Pesticide</NavLink></a>
          <a><NavLink to='/register'>Register</NavLink></a>
          <a><NavLink to='/login'>Login</NavLink></a>
          
        </div>
      </div>
      

    </div>
  )
}

export default Navbar