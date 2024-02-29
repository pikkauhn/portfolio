'use client'
import useResponsiveStrings from "./components/useResponsiveStrings"

export default function Home() {
  const {contentShape, pageHeader, pageContent} = useResponsiveStrings();
  return (
    <main>
        <div className={contentShape}>
          <h2 className={pageHeader}>About Me</h2>
          <p className={pageContent}>With a Suma Cum Laude bachelor's degree in Software Development from Capella University and nearly a decade in the IT industry, I approach software engineering with a meticulous blend of practical experience and continuous learning. As the IT Coordinator at Searcy Water Utilities, I've had the privilege of leading and contributing to impactful projects like the recently launched website overhaul and the ongoing development of a time-saving vacation and sick leave scheduler for employees.<br /><br />
            My focus lies in the robust world of JavaScript, primarily TypeScript and Node, where I relish the opportunity to build and integrate both internal and external APIs. I bring a methodical approach to my coding, prioritizing a clear functional foundation before adding layers of polish – think carefully laid blueprints followed by meticulous carpentry. And just like a craftsman seeking mastery, I'm constantly driven by the "why" behind each line of code. This insatiable curiosity fuels my ability to learn quickly and connect seemingly disparate dots, often leading to innovative solutions.<br /><br />
            Beyond technical prowess, I value collaboration and believe in the power of shared knowledge. My ambition lies in leveraging my experience and eagerness to learn to eventually lead a team of talented developers, fostering an environment where individual growth fuels collective success.<br /><br />
            This isn't just a portfolio; it's an invitation to explore an ongoing journey of professional development and a collaborative spirit committed to building efficient, user-centric solutions. I believe that together, we can write code that sings, not just functions.
          </p>
        </div>
    </main>
  )
}
