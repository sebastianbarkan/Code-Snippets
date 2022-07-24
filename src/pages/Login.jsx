import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


function Login() {

  const [usernameState, setUsernameState] = useState('') 

  const handleUsername = (e) => {
        e.preventDefault()
        setUsernameState('hi')
        console.log(e.target.value)
  }

  const [passwordState, setPasswordState] = useState('')

  const handlePassword = (e) => {
      e.preventDefault()
      console.log(e.target.value)
  }
  


  const handleSubmit = () => {
    
    


  }

    return (

    <>
        <section className='login-container'>
            <form className='login-form'>
                <h1 className='login-header'>Login To Your Account<span className='login-period-span'>.</span></h1>
                <input name='username' id='username' onChange={handleUsername} placeholder='Username' className='login-input'></input>
                <input name='password' id='password' onChange={handlePassword} placeholder='Password' className='login-input'></input>
                <button type='submit' onSubmit={handleSubmit()} className='login-submit'>SIGN IN</button>
                <div className='login-bottom-links'>
                  <Link to='/signup' className='login-signup-link-wrap'>Sign Up</Link>
                  <p id='slash'>/</p>
                  <p className='placeholder'>Forgot Password</p>
                </div>
            </form>
        </section>
    </>
  )
}

export default Login