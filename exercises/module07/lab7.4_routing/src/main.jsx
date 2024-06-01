import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* stores current location in browser address bar using clean URLs
    and uses the browsers built-in history stack */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
