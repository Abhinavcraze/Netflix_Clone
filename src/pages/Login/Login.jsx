import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState, setSignState] = React.useState(true); //true for sign up, false for sign in
  
  return (
    <div className = 'login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-container">
        <h1>{signState ? "Sign Up" : "Sign In"}</h1>
        <form>
          {signState === true ? <label htmlFor="name">Name</label> : null}
          {signState === true ?  <input type="text" placeholder='Your Name...' /> : null}
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Your Email...' />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Your Password...' />
          <button type='submit' className='login-btn'>{signState ? "Sign Up" : "Sign In"}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" /> 
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === false ? <p>New to Netflix?<span onClick = {() => setSignState(true)}>Sign Up Now</span></p> 
              : <p>Already have an account?<span onClick = {() => setSignState(false)}>Sign In</span></p>}
          
          
        </div>
      </div>
    </div>
  )
}

export default Login;