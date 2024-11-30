import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Replace useHistory with useNavigate

function NutritionTrack() {
  // State to track user input
  const [meal, setMeal] = useState("");
  const [calories, setCalories] = useState("");
  const [loggedMeals, setLoggedMeals] = useState([]); 
  const [totalCalories, setTotalCalories] = useState(0);
  const [mealSuggestions, setMealSuggestions] = useState([
    //use here what you are going to
    { id: 1, food: "Grilled Chicken", link: "https://www.onceuponachef.com/recipes/perfectly-grilled-chicken-breasts.html" },
    { id: 2, food: "Salad", link: "https://cafedelites.com/grilled-lemon-herb-mediterranean-chicken-salad-recipe/" },
    { id: 3, food: "Pasta", link: "https://www.allrecipes.com/recipe/269500/creamy-garlic-pasta/" }
  ]);
  const navigate = useNavigate(); 

  
  const handleSubmit = (e) => {
    e.preventDefault();
   
    setLoggedMeals([
      ...loggedMeals,
      { meal, calories: parseInt(calories) }
    ]);
    
    setMeal("");
    setCalories("");
  };


  useEffect(() => {
    const total = loggedMeals.reduce((acc, currentMeal) => acc + currentMeal.calories, 0);
    setTotalCalories(total); 
  }, [loggedMeals]);

  const navigateToRecipe = (mealLink) => {
    navigate(mealLink); 
  };

  return (
    <div>
      <h3>Here is your Nutrition track</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Meal:
          <input type="text" value={meal} onChange={(e) => setMeal(e.target.value)} />
        </label>
        <label>
          Calories:
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </label>
        <button type="submit">Log Meal</button>
      </form>

      <h4>Total Calories: {totalCalories}</h4>

      <h3>Logged Meals:</h3>
      <ul>
        {loggedMeals.map((mealItem, index) => (
          <li key={index}>
            {mealItem.meal} - {mealItem.calories} calories
          </li>
        ))}
      </ul>

      <h3>Meal Suggestions:</h3>
      <ul>
        {mealSuggestions.map((mealSuggestion) => (
          <li key={mealSuggestion.id}>
            {mealSuggestion.food}{" "}
            <a
               href={mealSuggestion.link}
               target="_blank" // Open in a new tab
               rel="noopener noreferrer" // Security best practice
               style={{ textDecoration: "underline", color: "blue" }}
            >
              View Recipe
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NutritionTrack;
