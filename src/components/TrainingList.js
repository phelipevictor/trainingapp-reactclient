import api from '../service/api.service'
import React, { useState, useEffect } from 'react'

export const TrainingsList = () => {
    const [trainings, setTraining] = useState([])

//const addOneTraining



//const getAllTraining


//const deleteOneTraining


//const updateOneTraining


    useEffect(() => {
        api.getTrainings('AB').then(result => {
            setTrainings(result)
        })
    }, [])
    return (
    <div>
    <h1>Training List</h1>
        {trainings.map((training) => (
        <h1 key={training._id}> {training.name}</h1>
            ))}
        </div>
    )
}