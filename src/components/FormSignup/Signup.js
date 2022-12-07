import React from 'react'

const Signup = () => {
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

export default Signup