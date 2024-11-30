import { useState } from "react";



const Preferenceform=({preferences,setPreferences})=> {

    const handleDiertaryChange = (event) => {
       setPreferences((prevPreferences) => ({
        ...prevPreferences,
        dietaryRestriction: event.target.value
       }))
    }
    const handleWorkoutTypesChange = (event) => {
        const {value, checked} = event.target;
        setPreferences((prevPreferences) =>{
            if(checked){
                return {
                    ...prevPreferences,
                    workoutTypes:[...prevPreferences.workoutTypes, value]
                }
            }
            else {
                return {
                    ...prevPreferences,
                    workoutTypes:prevPreferences.workoutTypes.filter((type) => type !== value )
                }
            }
        } )
    }
    return (
        
    
    <form>
        <h3>Preference Form</h3>
        <div>
            <h4>Work Out Types:</h4>
            <label>
                <input
                type="checkbox"
                value= "cardio"

                onChange={handleWorkoutTypesChange}
                
                />
            Cardio</label>
           
            <label>
                <input
                type="checkbox"
                value= "strength"

                onChange={handleWorkoutTypesChange}

                
                />
            Strength</label>
            <label>
                <input
                type="checkbox"
                value= "yoga"

                onChange={handleWorkoutTypesChange}
                
                />
            Yoga</label>
            <label>
                <input
                type="checkbox"
                value= "hiit"

                onChange={handleWorkoutTypesChange}
                
                />
            HIIT</label>
        </div>


        <div>
            <h4>Dietary restrictions</h4>
            <label>
                <input 
                type = "radio"
                value = "vegetarian"
                checked={preferences.dietaryRestriction === "vegetarian"}
            onChange={handleDiertaryChange}

                /> Vegetarian
            </label>
            <label>
                <input 
                type = "radio"
                value = "keto"
                checked={preferences.dietaryRestriction === "keto"}
            onChange={handleDiertaryChange}
                
                />Keto
            </label>
            <label>
                <input 
                type = "radio"
                value = "paleo"
                checked={preferences.dietaryRestriction === "paleo"}
            onChange={handleDiertaryChange}
                
                /> Paleo
            </label>
            <label>
                <input 
                type = "radio"
                value = "none"
                //for radio
                checked={preferences.dietaryRestriction === "none"}
            onChange={handleDiertaryChange}
                
                /> No restrictions
            </label>
        </div>

    </form>
    );
}

export default Preferenceform