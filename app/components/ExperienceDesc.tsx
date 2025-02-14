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
      title: "Fullstack Software Engineer",
      workplace: "Searcy Water Utilities",
      header1: 'Key Achievements:',
      description: [
        "Designed and developed core applications in Node.js and .NET, utilizing C#, TypeScript, and JavaScript, and integrating withrelational (MSSQL, MySQL) and non-relational (MongoDB) databases to support billing, inventory management, and waterdelivery maintenance.",
        "Developed and executed unit tests to ensure the reliability of key application components.",
        "Developed and deployed a responsive website with integrated auto-payment and account management functionalities, resultingin increased online customer engagement and reduced strain on customer service resources. This project included front-endenhancements using HTML5, CSS3, JavaScript, Bootstrap, and React.js, which optimized performance and improved userexperience."
      ],
      header2: 'Impactful Contributions:',
      highlights: [
        "Initiated and led the development of a new website utilizing MERN stack technologies (MongoDB, Express, React, Node.js), while actively contributing to its design and content creation. This effort resulted in a more dynamic online presence.",
        "Integrated Google ReCaptcha API, ArcGIS, and additional packages, enhancing user experience and functionality.",
        "Initiated, led, and significantly contributed to the ongoing project for the replacement of the card merchant and the development of a new online payment portal, poised to optimize transaction processes for enhanced efficiency and security.",
        "Orchestrated the creation of automation scripts using AutoHotkey (AHK) and .NET (C#), delivering a remarkable 30% reduction in monthly labor hours, significantly enhancing billing efficiency."
      ],
    },
    {
      visible: false,
      name: 'exp2',
      title: "Technical Writer / Consultant",
      workplace: "Self-Employed",
      header1: 'Key Responsibilities',
      description: [
        "Transcribed instructional videos into technical tutorials, improving users' understanding of IT operations, resulting in enhanceduser proficiency.",
        "Authored technical documents for distribution to customers, saving at least 1 hour per incident by providing clear and conciseinstructions.",
        "Developed and maintained comprehensive documentation for IT systems, streamlining troubleshooting processes and reducingsupport time."
      ],
      header2: '',
      highlights: [],
    },
    {
      visible: false,
      name: 'exp3',
      title: "Technical Support",
      workplace: "Sykes",
      header1: 'Key Responsibilities',
      description: [
        "Resolved customer complaints and inquiries by researching systems and databases, achieving a high customer satisfaction rateof 100%.",
        "Automated database repairs and backups through custom-built scripts, reducing system downtime.",
        "Delivered progress updates to customers, utilizing strong verbal and negotiation skills, resulting in improved client relationships."
      ],
      header2: '',
      highlights: [],
    },
    {
      visible: false,
      name: 'exp4',
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
    }
  ]

  return (
    <div>
      <div className="projectSelection">
        <Button className='buttons' outlined label='Fullstack Engineer' onClick={() => {
          setVisibleProjects({
            ...visibleProjects,
            exp1: !visibleProjects.exp1,
            exp2: false,
            exp3: false,
            exp4: false,
          })
        }} />
        <Button className='buttons' outlined label='Technical Writer' onClick={() => {
          setVisibleProjects({
            ...visibleProjects,
            exp2: !visibleProjects.exp2,
            exp1: false,
            exp3: false,
            exp4: false,
          })
        }} />
        <Button className='buttons' outlined label='Technical Support' onClick={() => {
          setVisibleProjects({
            ...visibleProjects,
            exp3: !visibleProjects.exp3,
            exp1: false,
            exp2: false,
            exp4: false,
          })
        }} />
        <Button className='buttons' outlined label='IT Manager' onClick={() => {
          setVisibleProjects({
            ...visibleProjects,
            exp4: !visibleProjects.exp4,
            exp1: false,
            exp2: false,
            exp3: false,
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