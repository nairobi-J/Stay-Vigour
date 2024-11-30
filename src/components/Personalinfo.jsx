import { useState } from "react";

const PersonalInfo = () => {
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [fitnessLevel, setFitnessLevel] = useState("");
    const handleAgeChange = (e) => setAge(e.target.value);
    const handleWeightChange = (e) => setWeight(e.target.value);
    const handleFitnessChange = (e) => setFitnessLevel(e.target.value);
    return (
        <form>
        <h3>Personal Informations</h3>
        <p>Age:
            <input
            type = "number"
            placeholder="Enter your age"
            value = {age}
            onChange = {handleAgeChange}
            required
            
            />
        </p>
        <p>Weight(kg):
            <input
            type = "number"
            placeholder="Enter your Weight"
            value = {weight}
            onChange = {handleWeightChange}
            required
            
            />
        </p>
        <p>Fitness Level:
           <select value={fitnessLevel} onChange={handleFitnessChange}  required>
  <option value="">Select your fitness level</option>  
  <option value="beginner">Beginner</option>   
  <option value="beginner">Intermediate</option>    
  <option value="beginner">Advanced</option>     



           </select>
        </p>
       
        </form>
    );
}


export default PersonalInfo