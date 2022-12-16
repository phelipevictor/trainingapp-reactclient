import api from '../../service/api.service'
import Navbar from '../../components/Navbar/Navbar'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import './Onetraining.css'

export const Onetraining = () => {
    const [onetraining, setOneTraining] = useState([])
    const { trainingId } = useParams()

    useEffect(() => {
        api.getTraining(trainingId).then(result => {
            setOneTraining(result)
        })
    })

    return (
        <div>
        <Navbar />
        <div className='one-training' key={onetraining._id}>
        <h1 className='one-training-name'> {onetraining.name}</h1>
        <h4 className='one-training-group'>Group: {onetraining.group}</h4>
        {onetraining.exercises?.map((exercise) => {
          return (
            <div key={exercise._id}>
            <h4 className='one-exercise-name'> Exercise: {exercise.exerciseId.name}</h4>
            <p className='one-exercise-description'> Description: {exercise.exerciseId.description}</p>
            <Link to={`${exercise.exerciseId.imageUrl}`} className='exercise-image'> Image Guide: {exercise.exerciseId.imageUrl}</Link>
            <p className='one-exercise-youtube'> Youtube Guide: {exercise.exerciseId.youtubeUrl}</p>
            </div>
          )
        }
        )}
        </div>
        </div>
    )
  }

export default Onetraining