import React from 'react'
import me from '../assets/images/me.jpg'
import Image from 'next/image'

const profilePic = () => {
  return (
    <div className='flex shape'>
    <Image className="profile" alt='Profile Picture' src={me} />
  </div>
  )
}

export default profilePic