import api from '../service/api.service'
import React, { useState, useEffect } from 'react'

export const TrainingsList = ({ name, group, description, exerciseTraining, type, level}) => {
    const [trainings, setTrainings] = useState([])


//const getAllTraining

const getMyAllTraining = async () => {
    try {
        const data = await api.getTrainings();
        setTrainings(data)
    } catch (error) {
        console.log(error, `Error to get my all Trainings`)
    }
}

//const deleteOneTraining

const deleteOneTraining = async (_trainingid) => {
    try {
        await api.deleteTraining(_trainingid)
        await api.getMyAllTrainings()
    } catch (error) {
        console.error(error, `Error to delete this Traning`)
    }
}

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

export default TrainingsList