'use client'
import React, { useState } from 'react'
import { Button } from 'primereact/button';

interface Description {
  visible: boolean;
  name: string;
  title: string;
  workplace: string;
  header1: string;
  header2: string;
  description: string[];
  highlights: string[];
}

const ExperienceDesc = () => {
  const [visibleProjects, setVisibleProjects] = useState<Record<string, boolean>>({});

  const projectList: Description[] = [
    {
      visible: false,
      name: 'exp1',
      title: "IT Coordinator",
      workplace: "Searcy Water Utilities",
      header1: 'Key Achievements:',
      description: [
        "Spearhead IT support for staff, adeptly managing hardware, software, and networking challenges",
        "Enhance customer satisfaction by addressing website and account-related issues, ensuring a seamless user experience.",
        "Collaborate with vendors, resolving hardware and software problems, facilitating migrations, and streamlining equipment acquisitions.",
        "Ensure billing accuracy by managing meter readings and optimizing database operations to produce comprehensive billing and water usage reports for upper management."
      ],
      header2: 'Impactful Contributions:',
      highlights: [
        "Initiated and led the development of a new website utilizing MERN stack technologies (MongoDB, Express, React, Node.js), while actively contributing to its design and content creation. This effort resulted in a more dynamic online presence.",
        "Integrated Google ReCaptcha API, ArcGIS, and additional packages, enhancing user experience and functionality.",
        "Spearheaded and played a leading role in the implementation of a new VOIP system, replacing the outdated POTS phone system across four city locations.",
        "Initiated, led, and significantly contributed to the ongoing project for the replacement of the card merchant and the development of a new online payment portal, poised to optimize transaction processes for enhanced efficiency and security.",
        "Orchestrated the creation of automation scripts using AutoHotkey (AHK), delivering a remarkable 30% reduction in monthly labor hours, significantly enhancing billing efficiency."
      ],
    },
    {
      visible: false,
      name: 'exp2',
      title: "IT Manager",
      workplace: "Computer Consulting and Repair",
      header1: 'Key Responsibilities',
      description: [
        "Facilitated the onboarding process for new team members by delivering comprehensive training and providing clear and efficient explanations of company protocols.",
        "Conducted in-depth research on a variety of computer systems and databases to effectively address customer complaints and inquiries, ensuring prompt issue resolution.",
        "Acted as a liaison between customers and upper management, effectively communicating and referring complex issues while maintaining positive customer relationships.",
        "Demonstrated strong verbal and negotiation skills in resolving customer complaints and concerns, consistently upholding a courteous and professional demeanor.",
        "Provided diligent support and adeptly resolved customer problems, ensuring their satisfaction with every interaction.",
        "Responded promptly and effectively to customer service emails, adhering to established timelines.",
        "Conducted thorough research, documentation, and escalation of cases to higher levels of support in accordance with internal procedures.",
        "Achieved promotion to the role of Office Manager in 2015, assuming the primary on-site technician responsibilities for non-contracted clients and serving as the secondary on-site technician for contracted clients."
      ],
      header2: '',
      highlights: [],
    },
  ]

  return (
    <div>
      <div className="projectSelection">
        <Button className='buttons' outlined label='IT Coordinator' onClick={() => {
          setVisibleProjects({
            ...visibleProjects,
            exp1: !visibleProjects.exp1,
            exp2: false
          })
        }} />
        <Button className='buttons' outlined label='IT Manager' onClick={() => {
          setVisibleProjects({
            ...visibleProjects,
            exp2: !visibleProjects.exp2,
            exp1: false,
          })
        }} />
      </div>
      
      <div>
        {projectList.map((data) => {
          return (
            <div key={data.title} >
              <div className="projectDescriptions">
                {visibleProjects[data.name] && (
                  <>
                    <h2>{data.title}</h2>
                    <p>Employer:</p>
                    <ul>
                      {data.workplace}
                    </ul>
                    <h3>{data.header1}</h3>
                    <ul>
                      {data.description.map((benefit: any, index: any) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                    <h3>{data.header2}</h3>
                    <ul>
                      {data.highlights.map((benefit: any, index: any) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </>)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExperienceDesc