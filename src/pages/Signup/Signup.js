import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import FormSignup from '../../components/FormSignup/FormSignup'

import '../Signup/Signup.css'

const Signup = () => {
    return (
    <div class='signup'>
    <Navbar />
    <div>
    <FormSignup />
    </div>
    </div>
 )
}

export default Signup