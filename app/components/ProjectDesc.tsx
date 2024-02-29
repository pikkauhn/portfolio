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

const ProjectDesc = () => {
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
      title: "Sanitation Bin Tracking App",
      name: "project3",
      technologies: [
        "Typescript",
        "Next.js14 with App Router",
        "Prisma with PostgreSQL",
        "Prime React with Prime Flex",
        "Next-Auth",
        "Argon2"
      ],
      features: [
        "[Work In Progress]",
        "App built for Sanitation Department to keep track of bins and customers",
        "Allows Admins to make changes to locations and bins",
        "Allows non-admin users to mark bins as picked up",
        "Allows users to mark a bin's lat and long."
      ],
      benefits: [
        "Department heads can make reports based on data from collections",
        "Bins are kept track of via actual location, not just street addresses",
        "Database can be easily searched to find information about the bin or customer"
      ],
      url: "https://github.com/pikkauhn/sanitation/"
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
        <Button className='buttons' outlined label='Sanitation App' onClick={() => {
          setVisibleProjects({
            ...visibleProjects,
            project3: !visibleProjects.project3,
            project2: false,
            project1: false
          })
        }} />
      </div>
      <div className="pageContent lg:h-24rem">

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

export default ProjectDesc