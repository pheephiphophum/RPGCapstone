import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import RoomOne from './components/RoomOne'
import { getCoconuts } from './services/apiCoconuts'

function App() {
  const [count, setCount] = useState(0)

  useEffect(function () {
    getCoconuts().then((data) => console.log(data))
  }, [])


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/roomone' element={<RoomOne />} />
      </Routes>
    </>
  )
}

export default App
