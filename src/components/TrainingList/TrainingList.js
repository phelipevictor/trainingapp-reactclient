import api from '../../service/api.service'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './TrainingList.css'

export const TrainingsList = ({ name, group, description, exerciseTraining, type, level }) => {
    const [trainings, setTrainings] = useState([])

    

    useEffect(() => {
        api.getTrainings('AB').then(result => {
            setTrainings(result)
        })
    }, [])
    return (
    <div className='all-page'>
    <h1 className='title'>Training List</h1>
        {trainings.map((training) => (
        <div className='horizontal-line' key={training._id}>
            <h1 className='training-name'>Name: {training.name}</h1>
            <h2 className='training-group'>Group: {training.group}</h2>
            <p className='training-description'>Description: {training.description}</p>
            <p className='training-level'>Level: {training.level}</p>
            <Link to={`/training/${training._id}`} className='button' type='button'> See the training in full details.</Link>
        </div>
            ))}
        </div>
    )
}

export default TrainingsList