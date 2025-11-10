import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home,jsx';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';

function App() {

  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
