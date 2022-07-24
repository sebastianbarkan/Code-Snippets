import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';



function SignUp() {

  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleUsername = (e) => {
        setUsername(e.target.value)
  }

  const handlePassword = (e) => {
        setPassword(e.target.value)
  } 

  const handleEmail = (e) => {
        setEmail(e.target.value)
  }

  const handleSubmit = () => {

  
  }

    return (
    <>
        <section className='login-container'>
            <form className='signup-form'>
                <h1 className='login-header'>Create An Account<span className='login-period-span'>.</span></h1>
                <input name='username' id='username' onChange={handleUsername} value={username} placeholder='Username' className='login-input'></input>
                <input name='password' id='password' onChange={handlePassword} value={password} placeholder='Password' className='login-input'></input>
                <input name='password' id='password' onChange={handleEmail} value={email} placeholder='Email' className='login-input'></input>
                <button type='submit' onSubmit={handleSubmit()} className='login-submit'>SIGN UP</button>
                <div className='login-bottom-links'>
                    <p className='placeholder'>Already have an account?</p>
                    <Link to='/login' className='signup-login-link-wrap'>Login</Link>  
                </div>
            </form>
        </section>
    </>
  )
}

export default SignUp