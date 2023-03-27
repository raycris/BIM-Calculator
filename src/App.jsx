import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useMemo(() => first, [second])

  return (
    <div >
      <h1>BIM Calculator</h1>
    </div>
  )
}

export default App
