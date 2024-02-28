'use client'
import React from 'react'
import Image from 'next/image'
import me from '../../assets/images/me.jpg'

import './Navbar.css'
import useWindowWidth from '../useWindowWidth'

const Navbar = () => {
  const width = useWindowWidth();

  return (
    <>
      {width < 900 ? 

null
        
       :
        <div className="flex flex-row flex-wrap">
          <div className='flex shape mt-3'>
            <Image className="profile" alt='Profile Picture' src={me} />

          </div>
          <div className='navBar flex mt-6'>
            <div className="linkies">
              <a href="/">About Me</a>
              <a href="/Projects">Projects</a>
              <a href="/Education">Education</a>
              <a href="/Experience">Experience</a>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Navbar