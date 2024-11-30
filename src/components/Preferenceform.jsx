import { useState } from "react";



const Preferenceform=(setPreferences)=> {

    const handleDiertaryChange = (event) => {
        setDietaryRestriction(event.target.value)
    }
    const handleWorkoutTypesChange = (event) => {
        const {value, checked} = event.target;

        setworkoutTypes((prevTypes) => {
            if(checked) {
                return [...prevTypes, value];
            }
            else {
                prevTypes.filter((type) => type != value)
            }
        });
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

            onChange={handleDiertaryChange}

                /> Vegetarian
            </label>
            <label>
                <input 
                type = "radio"
                value = "keto"

            onChange={handleDiertaryChange}
                
                />Keto
            </label>
            <label>
                <input 
                type = "radio"
                value = "paleo"

            onChange={handleDiertaryChange}
                
                /> Paleo
            </label>
            <label>
                <input 
                type = "radio"
                value = "none"

            onChange={handleDiertaryChange}
                
                /> No restrictions
            </label>
        </div>

    </form>
    );
}

export default Preferenceform