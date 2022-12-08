import api from '../service/api.service'
import React, { useState, useEffect } from 'react'

export const ExercisesList = () => {
    const [exercises, setExercises] = useState([])


//const addOneExercise



//const getAllExercises


//const deleteOneExercise


//const updateOneExercise


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

export default ExercisesList