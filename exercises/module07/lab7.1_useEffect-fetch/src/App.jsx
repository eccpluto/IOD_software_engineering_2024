import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BitcoinRates from './components/BitcoinRates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Module 7 lab 1</h1>
    <BitcoinRates></BitcoinRates>
    </>
  )
}

export default App
