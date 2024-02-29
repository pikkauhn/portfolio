'use client'
import EducationDesc from '../components/EducationDesc'
import useResponsiveStrings from '../components/useResponsiveStrings'

const page = () => {
  const { contentShape, pageHeader, pageContent } = useResponsiveStrings();


  return (
    <div className={contentShape}>
      <h2 className={pageHeader}>Education</h2>
      <div className={pageContent}>
      <EducationDesc />
      </div>
    </div>
  )
}

export default page