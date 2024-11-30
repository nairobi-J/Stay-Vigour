import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstpage from './Firstpage'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     Stay Vigour 
    <Router>
      {/* <nav>
        <ul>
          <li><Link to = "/mainPage">Home</Link></li>
        </ul>
        <ul>
          <li><Link to = "/firstPage">Firstpage</Link></li>
        </ul>
        <ul>
          <li><Link to = "/mainPage">Home</Link></li>
        </ul>
      </nav> */}
      <Routes>

        <Route path = "/mainpage" element = {<Home/>}/>
        <Route path = "/firstpage" element = {<Firstpage/>}/>


      </Routes>
    </Router>
     
      
     
        
    </>
  )
}

export default App
