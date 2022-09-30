import React from 'react'
import loo from '../assests/loo.png'
const Login = () => {
  return (
    
    <div className='header1'>
    <div className='header-img1'>
    <img src={loo} alt='loo' />
    <h3 className='header-text1'> Welcome Back! </h3>
    
    </div>
    
    <div className='ino'>
      Your Email< br />
      <input className='put' type= 'your email address'  height={400}/></div> 
      <div className='paz'>
      Password< br />
      <input className='p1' type= 'password'  height={400}/></div> 

    <div className='boom'>
      <button className='but'>LOGIN</button>
    </div>
    <div className='z8'>
      <ul className='lolo'>
        <li className='al'>Create an Account</li>
        <li className='aa'>Forgot Password</li>
      </ul>
    </div>
    </div>
  )
}

export default Login