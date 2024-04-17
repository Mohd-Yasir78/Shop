import React from 'react'
import './Register.css'

const Register = () => {
  return (
    
    <div className='parent'>
    <div className="main">
    <form action="">
        <h1>Registration</h1>
        <p>please provide the following to verify your indentity</p>
        <div className="input_box">
            <input type="text" placeholder="Full Name" required/>
            <i class="fa-solid fa-user-tie"></i>
        </div>

        <div className="input_box">
            <input type="email" placeholder="Email" required/>
            <i class="fa-solid fa-envelope"></i>
        </div>

        <div className="input_box">
            <input type="password" placeholder="Password" required/>
            <i class="fa-solid fa-lock"></i>
        </div>

        <div className="i_agree">
            <label><input type="checkbox"/>I agree to the terms & conditions</label>
        </div>

        <button type="submit">Register</button>

        <div className="login_link">
           <p>Already have an account? <a href="login_page.html">Login</a></p>
        </div>
    </form>
</div>
</div>

  )
}

export default Register
