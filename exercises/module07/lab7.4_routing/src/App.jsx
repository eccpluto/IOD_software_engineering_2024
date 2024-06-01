import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { MoodProvider } from './context/MoodContext'
import NavBar from './components/NavBar'
import { UserProvider } from './context/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProvider>
        <MoodProvider>
          <NavBar></NavBar>
          <AppRoutes></AppRoutes>
        </MoodProvider>
      </UserProvider>
    </>
  )
}

export default App
