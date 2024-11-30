import { useEffect, useState } from "react";

function NutritionTrack(){

    const [meal, setMeal] = useState("");
    const [calories, setCalories] = useState('');
    const handleSubmit=(e) => {
        e.preventDefault();
    }
    useEffect(() => {
        ([
          
            {id:1, Food: 'Fish', Quantity: "10g", Calories:"20j" },

        ]);
    }, []);

 return(
    <>
    <h3>Here is your Nutrition track</h3>
    <form>
    <label>Meal:<input type= "text" onChange = {(e) => setMeal(e.target.value)}/></label>
    <label>Calories:<input type= "number" onChange = {(e) => setCalories(e.target.value)}/></label>
    <button type= "submit">Log Meal</button>
    </form> 

    <h3>Meal suggestions</h3>
   
    </>
 );
}
export default NutritionTrack