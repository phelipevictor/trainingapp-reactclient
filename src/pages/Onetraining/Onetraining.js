import api from '../../service/api.service'
import Navbar from '../../components/Navbar/Navbar'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './Onetraining.css'

export const Onetraining = () => {
    const [onetraining, setOneTraining] = useState([])
    // const [loading, setLoading] = useState([true])
    const { trainingId } = useParams()

    useEffect(() => {
        api.getTraining(trainingId).then(result => {
            setOneTraining(result)
            // setLoading(false)
        })
    })

    return (
        <div>
        <Navbar />
        <div className='one-training' key={onetraining._id}>
        <h1 className='one-training-name'> {onetraining.name}</h1>
        {/* {loading ? <h1> Loading ...</h1>:(         */}
          <div className='horizontal-line'>
          {onetraining.exercises?.sort((a, b) => a.type-b.type).map((exercise) => {
          return (
            <div key={exercise._id}>
            <h1>{exercise.type}</h1>
            <div className="exercises-border">
            <h4 className='one-exercise-name'> Exercise: {exercise.exerciseId.name}</h4>
            <p className='one-exercise-description'> Description: {exercise.exerciseId.description}</p>
            <div>
            <a href={exercise.exerciseId.imageUrl} className='one-exercise-image'> Image Guide: {exercise.exerciseId.imageUrl}</a>
            </div>
            <div>
            <a href={exercise.exerciseId.youtubeUrl} className='one-exercise-youtube'> Youtube Guide: {exercise.exerciseId.youtubeUrl}</a>
            </div>
            </div>
            </div>
          )
        }
        )}
        </div>
        {/* )} */}
        </div>
        </div>
    )
  }

export default Onetraining