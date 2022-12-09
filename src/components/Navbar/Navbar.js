import React from 'react'; 
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <a href='/'>HomePage</a>
        <a href='/About'>About</a>
        <a href='/Signup'>Signup</a>
        <a href='/Login'>Login</a>
        <a href='/exercise'>Exercises</a>
        <a href='/training'>Trainings</a>
    </nav>
  )
}

export default Navbar