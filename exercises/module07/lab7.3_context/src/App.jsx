import { useState } from 'react'
import './App.css'

// access the mood provider from App.jsx
import { MoodProvider } from './context/MoodContext'
import EmojiToggler from './components/EmojiToggler'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Module 7 Exercise 3</h1>
    <MoodProvider>
      <EmojiToggler></EmojiToggler>
    </MoodProvider>
    </>
  )
}

export default App
