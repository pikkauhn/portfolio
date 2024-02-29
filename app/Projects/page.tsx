'use client'
import React from 'react'
import ProjectDesc from '../components/ProjectDesc'
import useWindowWidth from '../components/useWindowWidth'

const page = () => {
const width = useWindowWidth();

  return (
    <>
      {width < 900 ?
        <div className='contentShapeMobile'>
          <h2 className='pageHeaderMobile'>Projects</h2>
          <ProjectDesc />
        </div>
        :
        <div className='contentShape'>
          <h2 className="pageHeader">Projects</h2>
          <ProjectDesc />
        </div>
      }
    </>
  )
}

export default page