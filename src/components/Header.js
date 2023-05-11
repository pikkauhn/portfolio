import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className="Header">
        <div className="left-text">
       Zachary Burns
       </div>
       <div className="right-text">
        <Link to="/">About Me</Link>
        <Link to="/Experience">Experience</Link>
        Theme
       </div>
    </div>
  )
}

export default Header