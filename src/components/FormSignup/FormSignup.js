import React, { useState } from 'react'
import api from '../../service/api.service'
import { useNavigate } from 'react-router-dom'
import './FormSignup.css'

const FormSignup = () => {
    const [username, setUsername] = useState ('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const user = await api.signup({username, email, password})
        navigate('/login')
      } catch (error) {
        console.log(error)
      }
      setEmail('')
      setPassword('')
      setUsername('')
    }
    
    return (
      <form onSubmit={handleSubmit} >
        <input 
              type="text" 
              name='text' 
              placeholder='Username' 
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
          />
          <input 
              type="email" 
              name='email' 
              placeholder='E-mail' 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <input 
              type="password" 
              name='password' 
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Signup</button>
      </form>
    )
  }

export default FormSignup