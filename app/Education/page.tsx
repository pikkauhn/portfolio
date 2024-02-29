'use client'
import React from 'react'
import EducationDesc from '../components/EducationDesc'
import useWindowWidth from '../components/useWindowWidth'

const page = () => {
  const width = useWindowWidth();
  return (
    <div>
      {width < 900 ?
        <div className='contentShapeMobile'>
          <h2 className='pageHeaderMobile'>Education</h2>
          <EducationDesc />
        </div>
        :
        <div className='contentShape'>
          <h2 className="pageHeader">Education</h2>
          <EducationDesc />
        </div>
      }
    </div>
  )
}

export default page