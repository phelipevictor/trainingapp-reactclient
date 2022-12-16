import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TrainingList from '../../components/TrainingList/TrainingList'

import './Training.css'

const Training = () => {
    return (
    <div>
    <Navbar />
    <div className='training'>
        <TrainingList />
    </div>
    </div>
 )
}

export default Training