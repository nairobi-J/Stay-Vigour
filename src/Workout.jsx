import { useEffect, useState } from "react";

function  Workout(){

    const [workout, setWorkout] = useState([]);

    useEffect(() => {
        setWorkout([
            //actual api theke eikhane call dibi
            {id:1, day: 'Monday', exercise: 'Push-ups', sets: 3, reps: 10, demoLink: 'https://www.youtube.com/watch?v=example', isCompleted: false },
            {id:2, day: 'Tuesday', exercise: 'Squats', sets: 3, reps: 15, demoLink: 'https://www.youtube.com/watch?v=example', isCompleted: false },
            {id:3, day: 'Wednesday', exercise: 'Deadlifts', sets: 4, reps: 12, demoLink: 'https://www.youtube.com/watch?v=example', isCompleted: false },
        ]);
    }, []);
    const handleDone = (workoutId) => {
        setWorkout((prevWorkout) => 
            prevWorkout.map((workout) =>
                workout.id === workoutId ? { ...workout, isCompleted: true } : workout
            )
        );
    }
  return (
    <>
    <h1>Your workout plan</h1>
    {workout.map((workout, index) =>(
       <div key = {index}>
        <h4>{workout.day}</h4>
        <p>Exercise: {workout.exercise}</p>
        <p>Sets:{workout.sets} || reps: {workout.reps}</p>
        <a href = {workout.demoLink} target = "_blank" > View Exercise Demo</a>
        {
            !workout.isCompleted ? (
                <button onClick={() => handleDone(workout.id)}>Mark As Done</button>
            ):(
                <span> done</span>
            )
        }
        

       </div>
    ))}


    </>
  );
}
export default Workout