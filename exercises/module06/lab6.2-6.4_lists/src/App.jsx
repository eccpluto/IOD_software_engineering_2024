import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import BigCats from './components/BigCats'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Big Cats</h1>
      <BigCats/>
    </>
  )
}

export default App