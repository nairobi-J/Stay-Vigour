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
import Progress from './Progress'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <img src="/bg.webp" alt="Stay-Vigor Logo" className="background" />
      
   
   
     
    <Router className = "route">
      <div className='nav'>
      <div className='left'>
      <img src="/public/logo.webp" alt="Stay-Vigor Logo" className="logo" />
      </div>
      
      
     

      <div className='right'> 
      <nav className='right'>

      <Link to = "/mainPage">Home</Link>
      <Link to = "/workout">Workout Plan</Link>
      <Link to = "/nutritionTrack">Nutrition Track</Link>
      <Link to = "/dashboard">Dashboard</Link>
      
        </nav>
        </div>
         
      
     
      </div>
      <div>
      <Routes>

<Route path = "/mainpage" element = {<Home/>}/>
<Route path = "/login" element = {<Login/>}/>
<Route path = "/signup" element = {<Signup/>}/>
<Route path = "/workout" element = {<Workout/>} />
<Route path = "/nutritionTrack" element = {<NutritionTrack/>} />
<Route path = "/dashboard" element = {<Progress/>} />

</Routes>
      </div>
      
    </Router>
     
      
     
        
    </div>
  )
}

export default App
