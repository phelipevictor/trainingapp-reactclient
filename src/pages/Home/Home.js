import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

import '../Home/Home.css'

const Home = () => {
    return (
    <div>
    <Navbar />
    <div class='homepage'>
        <h1 class='title1'>Welcome to the Workout Aplication</h1>
        <h3 class='title3'>Please create an account to use our application</h3>
        <div class='links'>
        <a href="/Signup"> Click here to Sign-up!</a>
        <a href="/Login"> Click here to Login-in!</a>
        </div>
    </div>
    </div>
 )
}

export default Home