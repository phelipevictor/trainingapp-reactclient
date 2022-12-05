import React from 'react'; 
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <link href='/'>HomePage</a>
        <a href='/About'>About</a>
        <a href='/Signup'>Signup</a>
        <a href='/Login'>Login</a>
        <a href='/Mytraining'>MyTraining</a>
    </nav>
  )
}