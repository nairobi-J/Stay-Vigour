import { useState } from "react";
import Fitnessgoals from "./components/Fitnessgoals";
import PersonalInfo from "./components/Personalinfo";
import Preferenceform from "./components/Preferenceform";

function  Home(){
    const [personalInfo, setPersonalInfo] = useState({
        age:"",
        weight:"",
        fitnessLevel:""
    })
    const [fitnessgoals,setFitnessGoals] = useState([])
    const [preferences, setPreferences] = useState({
        workoutTypes:[],
        dietaryRestriction:""
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        //send data to server
        console.log(personalInfo, fitnessgoals, preferences);
    }


    //database er code eikhne lekhish!!!
    return(
      <div>
      
     <PersonalInfo setPersonalInfo = {setPersonalInfo}/>
     <Fitnessgoals setFitnessGoals = {setFitnessGoals}/>
     <Preferenceform preferences = {preferences} setPreferences = {setPreferences}/>
     <button onClick={handleSubmit}>Save</button>
      </div>
    );
}
export default Home