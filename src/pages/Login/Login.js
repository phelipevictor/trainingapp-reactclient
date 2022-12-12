import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import FormLogin from '../../components/FormLogin/FormLogin'

import '../Login/Login.css'

const Login = () => {
    return (
    <div class='login'>
    <Navbar />
    <div>
    <FormLogin />
    </div>
    </div>
 )
}

export default Login