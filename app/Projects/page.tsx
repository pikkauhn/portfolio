'use client'
import React from 'react'
import ProjectDesc from '../components/ProjectDesc'
import useResponsiveStrings from '../components/useResponsiveStrings'

const page = () => {
  const { pageContent, pageHeader, contentShape } = useResponsiveStrings();

  return (
      <div className={contentShape}>
        <h2 className={pageHeader}>Projects</h2>
        <div className={pageContent}>
          <ProjectDesc />
        </div>
      </div>
  )
}

export default page