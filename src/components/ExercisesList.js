import api from '../service/api.service'
import React, { useState, useEffect } from 'react'

export const ExercisesList = ({ name, muscularGroup, type, description, imageUrl, youtubeUrl }) => {
    const [exercises, setExercises] = useState([])
    const [muscularGroups, setMuscularGroups] = useState([])


//const getAllExercises

const getMyAllExercises = async () => {
    try {
        const data = await api.getExercises();
        setExercises(data)
        const muscular = new Set()
        data.forEach( exercise => {muscular.add(exercise.muscularGroup)} )
        setMuscularGroups(Array.from(muscular))
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
        getMyAllExercises()
    }, [])
    return (
    <div>
    <h1>Exercises List By Muscular Group:</h1>
        {muscularGroups.map((muscularGroup) => (
        
        <h3> {muscularGroup} </h3>
            ))}
        </div>
    )
}

export default ExercisesList