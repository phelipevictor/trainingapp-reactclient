import React, { useState } from 'react'
import api from '../../service/api.service'
import { useNavigate } from 'react-router-dom'
import './FormSignup.css'

const FormSignup = () => {
    const [username, setUsername] = useState ('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()
    
  return (
    <div id="form">
  <h2>Signup</h2>
  <form action="/signup" method="POST">
 
    <label>Username: </label>
      <input type='text' 
      name='username'
      value={username} 
      />
    <label>Email: </label>
      <input 
      type='email' 
      name='email' 
      value={email} 
      />
    <label>Password: </label>
      <input 
      type='password' 
      name='password' 
      value={password}
      />
    <button type='submit'>Create account</button>
  </form>
</div>
  )
}

export default FormSignup