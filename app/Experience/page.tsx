'use client'
import React from 'react'
import ExperienceDesc from '../components/ExperienceDesc'
import useWindowWidth from '../components/useWindowWidth'

const page = () => {
  const width = useWindowWidth();
  return (
    <div>
      {width < 900 ?
        <div className='contentShapeMobile'>
          <h2 className='pageHeader'>Experience</h2>
          <ExperienceDesc />
        </div>
        :
        <div className='contentShape'>
          <h2 className="pageHeader">Experience</h2>
          <ExperienceDesc />
        </div>
      }
    </div>
  )
}

export default page