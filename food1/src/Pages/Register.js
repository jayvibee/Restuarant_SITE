import React from 'react'
import lo from '../assests/lo.png';
const Register = () => {
  return (
    <div className='header5'>
    <div className='header-img5'>
    <img src={lo} alt='lo' />
    <h3 className='header-text5'> Welcome to Lilies </h3>
    
    </div>
    
    <div className='inn'>
      Your Full Name< br />
      <input className='nam' type= 'your name'  height={400}/></div> 
    <div className='in'>
      Your Email< br />
      <input className='put' type= 'your email address'  height={400}/></div> 
      <div className='pazz'>
      Password< br />
      <input className='p1' type= 'password'  height={400}/></div> 

    <div className='boo'>
      <button className='but'>LOGIN</button>
    </div>
    <div className='z0'>
      <ul className='lo8'>
        <li className='a8'>Already have an Account?<b className='lp'> LOGIN</b></li>
        
      </ul>
    </div>
    </div>
  )
}

export default Register