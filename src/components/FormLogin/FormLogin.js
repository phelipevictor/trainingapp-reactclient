import React, { useState } from 'react'
import api from '../../service/api.service'
import { useNavigate } from 'react-router-dom'
import './FormLogin.css'

const FormLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await api.login({email, password})
            navigate('/exercise')
        } catch (error) {
            console.log(error)
        }
        setEmail('')
        setPassword('')
    }

    const showMessage = (message) => {
      setMessage(message)
      setTimeout(() => {
        setMessage('')
      }, 3000)
    }

      return (
        <div>
        <h2>Login</h2>
          {message !== '' && <p>{message}</p>}
          <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input
              type='text'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password: </label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Login</button>
          </form>
        </div>
      )
    }

    export default FormLogin