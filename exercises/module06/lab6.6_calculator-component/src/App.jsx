import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './components/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Module 6 lab 6</h1>
      <Calculator />
    </>
  )
}

export default App
