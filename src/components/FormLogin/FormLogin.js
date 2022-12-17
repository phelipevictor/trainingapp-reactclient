import React, { useState } from 'react'
import api from '../../service/api.service'
import { useNavigate } from 'react-router-dom'
import './FormLogin.css'

const FormLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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


    return (
      <div id="login-form">
      <div className='fieldset'>
        <legend>Lets Train?!</legend>
          <form onSubmit={handleSubmit} >
              <div className='row'>
              <label for='email'></label>
              <input 
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
              </div>
              <div className='row'>
              <label for='password'></label> 
              <input 
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
      </div>
          <input type="submit" value="Login"/>
        </form>
      </div>
    </div>
        )
    }

    export default FormLogin