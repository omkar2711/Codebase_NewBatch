import { useState , useEffect } from 'react'
import { getExercises } from '../apis/api'

const AllExercise = () => {
  const [exercises , setExercises] = useState([])

  useEffect(()=>{
    const fetchExercises = async () =>{
      const data = await getExercises();
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
