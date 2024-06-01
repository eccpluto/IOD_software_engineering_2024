import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { MoodProvider } from './context/MoodContext'
import { UserProvider } from './context/UserContext'
import MyAppBar from './components/SearchAppBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProvider>
        <MoodProvider>
          <MyAppBar></MyAppBar>
          {/* <NavBar></NavBar> */}
          <AppRoutes></AppRoutes>
        </MoodProvider>
      </UserProvider>
    </>
  )
}

export default App
