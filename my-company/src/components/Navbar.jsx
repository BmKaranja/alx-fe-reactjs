import React from 'react'

function Navigation(){
  return (
    <div>
        <nav>
            <ul>
                <Link to ="Home.jsx">Home</Link>
                <Link to ="About.jsx">About</Link>
                <Link to ="Service.jsx">Service</Link>
                <Link to ="Contact.jsx">Contact</Link>
            </ul>
        </nav>

    </div>
  )
}

export default Navigation
