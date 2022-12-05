import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const Exercises = () => {
    return (
    <div>
    <Navbar />
    <div>
        <h1>Exercises</h1>
        <p>Here you will find all exercises registered in the App and able for you to choose</p>
        <div>
        <ExercisesList />
        </div>
    </div>
    </div>
 )
}

export default Exercises