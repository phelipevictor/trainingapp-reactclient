import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const ExercisesList = () => {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5005/homepage/Exercises').then((result) => {
            setExercises(result.data)
        })
    }, [])
    return <div>
    {exercises.map((exercise) => (
        <h1 key={exercise._id}> {exercise.name}</h1>
    ))}
    </div>
}