import React from 'react'
import { useState , useEffect } from 'react'
import {getAllExercises} from '../apis/api'

const AllExercise = () => {
  const [exercises , setExercises] = useState([])

  useEffect(()=>{
    const fetchExercises = async () =>{
      const data = await getAllExercises();
      setExercises(data);
    };
    fetchExercises();
  },[])
  return (
    <div>
      <h1>All Exercises</h1>

      {exercises.length > 0 ? (
        <ul>
          {exercises.map((exercise) => (
            <li key={exercise.id}>{exercise.name}</li>
          ))}
        </ul>
      ) : (
        <p>No exercises found.</p>
      )}
    </div>
  )
}

export default AllExercise
