import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'


function Header() {
  const location = useLocation();

  const showHeader = location.pathname !== "/";

  if (showHeader) {
  return (    
    <div className="Header">
        <div className="left-text">
       Zachary Burns
       </div>
       <div className="right-text">
        <NavLink to="/aboutMe">About Me</NavLink>
        <NavLink to="/Experience">Experience</NavLink>
        {/* <NavLink>Theme</NavLink> */}
       </div>     
    </div>
  )
  }
  else {
    return (
      null
    )
  }
}

export default Header