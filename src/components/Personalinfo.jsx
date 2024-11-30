import { useState } from "react";

const PersonalInfo = ({setPersonalInfo})=> {

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPersonalInfo((prevState) => ({...prevState, [name]:value}))
    }
    return (
        <form>
        <h3>Personal Informations</h3>
        <p>Age:
            <input
            type = "number"
            placeholder="Enter your age"
            name="age"
            onChange = {handleChange}
            required
            
            />
        </p>
        <p>Weight(kg):
            <input
            type = "number"
            placeholder="Enter your Weight"
            name="weight"
            onChange = {handleChange}
            required
            
            />
        </p>
        <p>Fitness Level:
           <select  onChange={handleChange} name="fitnessLevel" required>
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