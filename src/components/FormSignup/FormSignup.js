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
  <div id="registration-form">
	<div class='fieldset'>
    <legend>Lets Train?!</legend>
      <form onSubmit={handleSubmit} >
      <div className='row'>
      <label for='username'></label>
        <input 
              type="text" 
              name='text'
              placeholder='Username' 
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
          />
          </div>
          <div className='row'>
          <label for='email'></label>
          <input 
              type="email" 
              name='email'
              placeholder='Email' 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div className='row'>
          <label for='password'></label> 
          <input 
              type="password" 
              name='password'
              placeholder='Password' 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
	</div>
			<input type="submit" value="Signup"/>
		</form>
	</div>
</div>
    )
  }

export default FormSignup