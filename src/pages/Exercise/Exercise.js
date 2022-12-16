import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ExercisesList from '../../components/ExercisesList/ExercisesList.js'

import './Exercise.css'

const Exercise = () => {
    return (
    <div>
    <Navbar />
    <div className='exercise'>
    <ExercisesList />
    </div>
    </div>
 )
}

export default Exercise