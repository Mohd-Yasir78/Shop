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
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/fertilizer'>Fertilizer</NavLink>
          <NavLink to='/seed'>Seed</NavLink>
          <NavLink to='/pesticide'>Pesticide</NavLink>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='/login'>Login</NavLink>
          
        </div>
      </div>
      

    </div>
  )
}

export default Navbar