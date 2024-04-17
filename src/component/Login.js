import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='parent'>
    <div className="img_box">
    <div className="login">
        <form action="">
            <h1>Login</h1>
            <div className="input_box">
                <input type="text" placeholder="Username" required/>
                <i class="fa-solid fa-user-tie"></i>
            </div>
            <div className="input_box">
                <input type="password" placeholder="Password" required/>
                <i class="fa-solid fa-lock"></i>
            </div>

            <div className="remember_forget">
                <label> <input type="checkbox"/>Remember me</label>
                <a href="#">Forget password</a>
            </div>

            <button type="submit" class="btn"><a href="My profile.html">Login</a> </button>

            <div className="register_link">
                <p> Don't have an acount? <a href="Register_page.html">Regisert</a></p>
            </div>
        </form>
    </div>
</div>
    </div>
  )
}

export default Login
