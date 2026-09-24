import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import RoomOne from './components/RoomOne'
import Stars from './components/Stars'
import { getCoconuts } from './services/apiCoconuts'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/roomone' element={<RoomOne />} />
        <Route path='/stars' element={<Stars />} />
      </Routes>
      
    </>
  )
}

export default App
