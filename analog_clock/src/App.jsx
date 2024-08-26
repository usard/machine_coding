import { useState } from 'react'
import AnalogClock from './AnalogClock'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
          <AnalogClock></AnalogClock>
  )
}

export default App
