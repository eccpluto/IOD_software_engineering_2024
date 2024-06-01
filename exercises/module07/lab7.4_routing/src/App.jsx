import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { MoodProvider } from './context/MoodContext'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MoodProvider>
        <NavBar></NavBar>
        <AppRoutes></AppRoutes>
      </MoodProvider>
    </>
  )
}

export default App
