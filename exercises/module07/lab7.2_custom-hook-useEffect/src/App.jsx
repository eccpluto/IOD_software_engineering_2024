import { useState } from 'react'
import './App.css'
import BitcoinRates from './components/BitcoinRates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Module 7 lab 2</h1>
    <BitcoinRates></BitcoinRates>
    </>
  )
}

export default App
