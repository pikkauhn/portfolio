import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import me from '../../assets/images/me.jpg'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="flex flex-row flex-wrap">
      <div className='flex shape mt-3'>
        <Image className="profile" alt='Profile Picture' src={me} />
      </div>
      <div className='navBar mt-6'>
        <div className="linkies">
          <a href="/" className='ml-5'>Home</a>
          <a href="/AboutMe" className='ml-5'>About Me</a>
          <a href="/Projects" className='ml-5'>Projects</a>
          <a href="/Education" className='ml-5'>Education</a>
          <a href="/Experience" className='ml-5'>Experience</a>
        </div>
      </div>
    </div>

  )
}

export default Navbar