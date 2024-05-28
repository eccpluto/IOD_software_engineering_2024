import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// custom components
// import Clock from './components/Clock'
import ClockDisplay from './components/Clock'
import ActivityFinder from './components/ActivityFinder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Module 7 React sandbox</h1>
      <h2>Clock component:</h2>

      {/* understanding the useEffect hook call */}
      <ClockDisplay></ClockDisplay>

      {/* a fetching use case for useEffect */}
      <ActivityFinder></ActivityFinder>
    </>
  )
}

export default App
