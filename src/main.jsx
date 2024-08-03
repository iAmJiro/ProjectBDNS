import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Home from './Components/Home.jsx'
import FAQ from './FAQ.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="ProjectBDNS/" element={<Home />} />
        {/* Uncomment when the pages exist */}
        {/* <Route path="ProjectBDNS/about" element={<About />} /> 
        <Route path="ProjectBDNS/services" element={<Services />} />
        <Route path="ProjectBDNS/contact" element={<Contact />} /> */}
        <Route path="ProjectBDNS/faq" element={<FAQ />} />
      </Routes>
      <Home />
    </Router>
  </React.StrictMode>,
)
