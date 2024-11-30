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
import Community from './Community'
import Chat from './components/Chat'
import Challenges from './components/Challenges'
import Feed from './components/Feed'
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
      <Link to = "/community">Community</Link>
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
<Route path = "/community" element = {<Community/>} />
<Route path="/feed" element={<Feed />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/challenges" element={<Challenges />} />


</Routes>
      </div>
      
    </Router>
     
      
     
        
    </div>
  )
}

export default App
