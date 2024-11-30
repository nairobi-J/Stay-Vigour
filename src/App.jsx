import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstpage from './Login'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Workout from './Workout'
import NutritionTrack from './Nutritiontrack'
import Login from './Login'
import Signup from './SignUp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Stay Vigour</h1> 
    <Router>
      <nav>
        
          <button><Link to = "/mainPage">Home</Link></button>
        
        
          <button><Link to = "/workout">Workout Plan</Link></button>
        
      
          <button><Link to = "/nutritionTrack">Nutrition Track</Link></button>
      
      </nav>
      <Routes>

        <Route path = "/mainpage" element = {<Home/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/workout" element = {<Workout/>} />
        <Route path = "/nutritionTrack" element = {<NutritionTrack/>} />

      </Routes>
    </Router>
     
      
     
        
    </>
  )
}

export default App
