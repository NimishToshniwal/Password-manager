import React from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {
  const [loginData, setLoginData] = useState({});
  const auth = getAuth();
  const onInput = (event) => {
    let data = { [event.target.name]: event.target.value }
    setLoginData({ ...loginData, ...data })
  }
  let navigate=useNavigate();
  const login=()=>{
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
    .then((response)=>{
      localStorage.setItem('userEmail', response.user.email)
      navigate('/home')
    })
    .catch(err=>{
      alert(err.message)
    })
  }

  return (
    <div className='register-main'>
      <h1>Login</h1>

      <div className='card-main'>
        <div className='inputs-container'>
          <input
            placeholder='Enter your Email'
            className='input-fields'
            onChange={onInput}
            type='email'
            name='email'
            on
          />
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                  login()
              }
          }}
            placeholder='Enter your Password'
            className='input-fields'
            onChange={onInput}
            name='password'
            type={'password'}
          />
          <button 
          onClick={login}
          className='input-btn'>
            Sign In
          </button>
          {/* <button 
          onClick={navigate('/register')}
          className='input-btn'> */}
            <Link to={'/register'} className='input-btn' style={{textDecoration:'None'}}>Don't have an account?</Link>
          {/* </button> */}
        </div>
      </div>
    </div>
  )
}
