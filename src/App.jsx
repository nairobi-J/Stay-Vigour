import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstpage from '../public/Firstpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Stay Vigour 
      <Firstpage/>
        
    </>
  )
}

export default App
