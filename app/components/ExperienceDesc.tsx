'use client'
import React, { useState } from 'react'
import { Button } from 'primereact/button';

interface Description {
  visible: boolean;
  title: string;
  name: string;
  technologies: string[];
  features: string[];
  benefits: string[];
  url: string;
}

const ExperienceDesc = () => {
  const [visibleProjects, setVisibleProjects] = useState<Record<string, boolean>>({});

  const projectList: Description[] = [
    {
      visible: false,
      title: "Time Off Management System",
      name: "project1",
      technologies: [
        "TypeScript",
        "Next.js13 with App Router",
        "Prisma with PostgreSQL",
        "Prime React with Prime Flex"
      ],
      features: [
        "Streamlined time off requests and approvals",
        "Simplified leave management for managers",
        "Real-time request tracking",
        "Centralized dashboard",
        "Automatic notifications"
      ],
      benefits: [
        "Improved employee morale and satisfaction",
        "Enhanced transparency and communication",
        "Streamlined processes for managers",
        "Saving time and resources"
      ],
      url: "https://swu-vacalendar.onrender.com"
    },
    {
      visible: false,
      title: "Searcy Water Utilities Website",
      name: "project2",
      technologies: [
        "JavaScript",
        "CRA - Create React App",
        "Bcryptjs, Cors, Express, Mongoose, Multer, Nodemailer",
        "MUI, Axios, Recaptcha, React-Router-Dom, React-PDF",
      ],
      features: [
        "Significantly updated customer experience with better UI",
        "Allows customers to fill out forms for different services",
        "Shows customers useful data such as our billing calendar",
        "Provides customers with current information via Facebook posts",
        "Has an admin side that allows management to easily make changes to data shown on the website",
        "Admin login is saved in a NoSQL database, encrypted with Bcryptjs, and sign in requires MFA"
      ],
      benefits: [
        "Improved customer experience",
        "Enhanced communication between the business and customers",
        "Brings some services closer to automation",
        "Saves time and resources from customers and employees"
      ],
      url: "https://www.searcywater.org"
    },
    {
      visible: false,
      title: "Name Puller",
      name: "project3",
      technologies: [
        "JavaScript",
        "CRA - Create React App",
        "Axios, Supabase, Prime Icons, and Prime React",
      ],
      features: [
        "Simple App for my family members to draw names for Christmas",
        "Easy to Use, easy to check",
        "Data is stored in a database"
      ],
      benefits: [
        "Users can draw a random name regardless of their current location",
        "Never repeats a drawn name as the rows update and are maintained with Supabase",
      ],
      url: "https://namepuller.onrender.com"
    }
  ]

  return (
    <div>
      <div className="projectSelection">
        <Button className='buttons' outlined label='Vacalendar' onClick={() => {
          setVisibleProjects({
            ...visibleProjects,
            project1: !visibleProjects.project1,
            project2: false,
            project3: false
          })
        }} />
        <Button className='buttons' outlined label='SWU Website' onClick={() => {
          setVisibleProjects({
            ...visibleProjects,
            project2: !visibleProjects.project2,
            project1: false,
            project3: false
          })
        }} />
        <Button className='buttons' outlined label='Name Puller' onClick={() => {
          setVisibleProjects({
            ...visibleProjects,
            project3: !visibleProjects.project3,
            project2: false,
            project1: false
          })
        }} />
      </div>
      <div className="pageContent">

        {projectList.map((data) => {
          return (
            <div key={data.title} >
              <div className="projectDescriptions">
                {visibleProjects[data.name] && (
                  <>
                    <h2>{data.title}</h2>
                    <p>Built with:</p>
                    <ul>
                      {data.technologies.map((tech: any, idx: any) => (
                        <li key={idx}>{tech}</li>
                      ))}
                    </ul>
                    <h3>Key Features:</h3>
                    <ul>
                      {data.features.map((feature: any, index: any) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <h3>Benefits:</h3>
                    <ul>
                      {data.benefits.map((benefit: any, index: any) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                    <h3>URL:</h3>
                    <ul>
                      <a href={data.url} target="_blank">{data.url}</a>
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