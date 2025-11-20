import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className = 'login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-container">
        <h1>Sign Up</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Your Name...' />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Your Email...' />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Your Password...' />
          <button type='submit' className='login-btn'>Sign Up</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" /> 
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;