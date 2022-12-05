import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
    return (
    <div>
    <Navbar />
    <div>
        <h1>Welcome to the Training Aplication</h1>
        <h3>Please create an account to use our application</h3>
        <a href="/Signup"> Click here to Sign-up!</a>
        <a href="/Login"> Or click here to Login-in if you already have an account!</a>
    </div>
    </div>
 )
}

export default Home