import { useState } from "react";

const Fitnessgoals =({setFitnessGoals}) => {

   
    const handlecheckboxChange = (event) =>{
        const {value, checked} = event.target;
        setFitnessGoals((prevGoals)=>{
            if(checked){
                return [...prevGoals, value];
            }
            else {
                return prevGoals.filter((goal) => goal !== value)
            }
        } );
    }
 return(

    <form>
        <h3>Select your fitness goals</h3>
        
            <label><input 
            type = "checkbox"
            value= "weight-loss"
       
            onChange={handlecheckboxChange}
            /> Weight Loss
            </label>
        
        
            <label><input 
            type = "checkbox"
            value="muscle-gain"
     
            onChange={handlecheckboxChange}
            /> Muscle Gain
            </label>
        
        
            <label><input 
            type = "checkbox"
            value = "endurance"

            onChange={handlecheckboxChange}
            /> Endurance
            </label>
        
        
            <label><input 
            type = "checkbox"
            value= "flexibility"
    
            onChange={handlecheckboxChange}
            /> Flexibility
            </label>
        
       
    
 </form>
 );


}
export default Fitnessgoals