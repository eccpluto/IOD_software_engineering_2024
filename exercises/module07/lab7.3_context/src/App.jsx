import { useState } from 'react'
import './App.css'

// access the mood provider from App.jsx
import { MoodProvider } from './context/MoodContext'
import BitcoinRates from './components/BitcoinRates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Module 7 Exercise 3</h1>
      <MoodProvider>
        <BitcoinRates></BitcoinRates>
      </MoodProvider>
    </>
  )
}

export default App
