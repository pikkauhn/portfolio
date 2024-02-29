'use client'
import React from 'react'
import ExperienceDesc from '../components/ExperienceDesc'
import useResponsiveStrings from '../components/useResponsiveStrings'

const page = () => {
  const { pageContent, pageHeader, contentShape } = useResponsiveStrings();
  return (
    <div className={contentShape}>
      <h2 className={pageHeader}>Experience</h2>
      <div className={pageContent}>
        <ExperienceDesc />
      </div>
    </div>
  )
}

export default page