import api from '../service/api.service'
import React, { useState, useEffect } from 'react'

export const ExercisesList = ({ name, muscularGroup, type, description, imageUrl, youtubeUrl }) => {
    const [exercises, setExercises] = useState([])


//const getAllExercises

const getMyAllExercises = async () => {
    try {
        const data = await api.getExercises();
        setExercises(data)
    } catch (error) {
        console.log(error, `Error to get my all Exercises`)
    }
}

//const deleteOneExercise

const deleteOneExercise = async (_exerciseid) => {
    try {
        await api.deleteExercise(_exerciseid)
        await api.getMyAllExercises()
    } catch (error) {
        console.error(error, `Error to delete this Exercise`)
    }
}

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