import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

import '../Home/Home.css'

const Home = () => {
    return (
    <div>
    <Navbar />
    <div className='homepage'>
        <h1 className='title1'>Welcome to the Workout Aplication</h1>
        <h3 className='title3'>Please create an account to use our application</h3>
        <div className='links'>
        <Link to="/Signup"> Click here to Sign-up!</Link>
        <Link to="/Login"> Click here to Login-in!</Link>
        </div>
    </div>
    </div>
 )
}

export default Home