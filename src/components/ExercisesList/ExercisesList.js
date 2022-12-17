import api from "../../service/api.service";
import React, { useState, useEffect } from "react";

import "./ExercisesList.css";

export const ExercisesList = ({
  name,
  muscularGroup,
  type,
  description,
  imageUrl,
  youtubeUrl,
}) => {
  const [exercises, setExercises] = useState([]);
  const [muscularGroups, setMuscularGroups] = useState([]);

  const getMyAllExercises = async () => {
    try {
      const data = await api.getExercises();
      setExercises(data);
      const muscular = new Set();
      data.forEach((exercise) => {
        muscular.add(exercise.muscularGroup);
      });
      setMuscularGroups(Array.from(muscular));
    } catch (error) {
      console.log(error, `Error to get my all Exercises Muscular Groups`);
    }
  };

  const getexercisebymusculargroup = (muscularGroup) => {
    return exercises.filter((exercise) => {
      return exercise.muscularGroup === muscularGroup;
    });
  };

  useEffect(() => {
    getMyAllExercises();
  }, []);
  return (
    <div>
      <h1 className='title'>Exercises List By Muscular Group:</h1>
      <p>Here you will find all exercises registered in the App divided by muscular groups. You will see a description on how to perform the exercise, an image and a youtube video example.</p>
      {muscularGroups.map((muscularGroup) => {
        return (
          <div className='horizontal-line'>
            <h3 className='muscular-group'> {muscularGroup} </h3>
            {getexercisebymusculargroup(muscularGroup).map((exercise) => {
              return (
                <div className='exercises-border' key={exercise._id}>
                  <h4 className='exercise-name'> {exercise.name} </h4>
                  <p className='exercise-type'> Type: {exercise.type} </p>
                  <p className='exercise-description'> Description: {exercise.description} </p>
                  <div>
                  <a href={exercise.imageUrl} className='exercise-image'> Image Guide: {exercise.imageUrl} </a>
                  </div>
                  <div>
                  <a href={exercise.youtubeUrl} className='exercise-video'> Youtube Guide: {exercise.youtubeUrl} </a>
                </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ExercisesList;
