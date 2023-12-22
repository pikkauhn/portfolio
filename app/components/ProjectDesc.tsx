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
        "Next.js",
        "Prisma & PostgreSQL",
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
      title: "project2",
      name: "project2",
      technologies: [
        "TypeScript",
        "Next.js",
        "Prisma & PostgreSQL",
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
      title: "project3",
      name: "project3",
      technologies: [
        "TypeScript",
        "Next.js",
        "Prisma & PostgreSQL",
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
    }
  ]

  return (
    <div>
      <div className="pageContent">
        <div className="projectSelection">
          <Button className='buttons' outlined label='Vacalendar' onClick={() => { 
            setVisibleProjects({ ...visibleProjects, 
            project1: !visibleProjects.project1,
            project2: false,
            project3: false
             }) }} />
          <Button className='buttons' outlined label='SWU Website' onClick={() => { 
            setVisibleProjects({ ...visibleProjects, 
            project2: !visibleProjects.project2,
            project1: false,
            project3: false
             }) }} />
          <Button className='buttons' outlined label='Name Puller' onClick={() => { 
            setVisibleProjects({ ...visibleProjects, 
            project3: !visibleProjects.project3,
            project2: false,
            project1: false
             }) }} />
        </div>
        {projectList.map((data) => {
          return (
            <div>
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
                      <a href={data.url}>{data.url}</a>
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