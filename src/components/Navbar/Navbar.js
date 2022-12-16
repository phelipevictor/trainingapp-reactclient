import React from 'react'; 
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to='/'>HomePage</Link>
        <Link to='/about'>About</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
        <Link to='/exercise'>Exercises</Link>
        <Link to='/training'>Trainings</Link>
    </nav>
  )
}

export default Navbar