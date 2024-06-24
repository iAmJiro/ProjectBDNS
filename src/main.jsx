import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Home />
  </React.StrictMode>,
)
