import React from 'react'
import { Link } from 'react-router-dom'

function Navigation(){
  return (
    <div>
        <nav style ={{backgroundColor: '#f0f0f0', padding: '10px', display: 'flex', justifyContent: 'center'}}>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Service">Service</Link>
                <Link to="/Contact">Contact</Link>
            </ul>
        </nav>

    </div>
  )
}

export default Navigation
