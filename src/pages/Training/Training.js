import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TrainingList from '../../components/TrainingList'

import './Training.css'

const training = () => {
    return (
    <div>
    <Navbar />
    <div>
        <h1>Ready Training Plans for all</h1> 
        <p>Here you will find sample training plans, already made for all</p>
        <TrainingList />
        <h1>My Training Plans</h1>
        <p>Here you will find your training plans</p>
    </div>
    </div>
 )
}

export default training