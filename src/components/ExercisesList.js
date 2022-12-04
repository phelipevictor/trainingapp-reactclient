import api from '../service/api.service'
import React, { useState, useEffect } from 'react'

export const ExercisesList = () => {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        api.getExercises('Deadlift').then(result => {
            setExercises(result)
        })
    }, [])
    return (
    <div>
    <h1>Exercises List</h1>
        {exercises.map((exercise) => (
        <h1 key={exercise._id}> {exercise.name}</h1>
            ))}
        </div>
    )
}