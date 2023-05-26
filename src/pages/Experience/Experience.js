import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import experience from '../../assets/jsons/experience.json';
import project from '../../assets/jsons/project.json';
import Project1 from '../../assets/images/Project1.jpg';
import Project2 from '../../assets/images/Project2.png';
import Project3 from '../../assets/images/Project3.png';
import Project4 from '../../assets/images/Project4.PNG';
import Project5 from '../../assets/images/Project5.jpg';
import Project6 from '../../assets/images/Project6.jpg';
import './Experience.css'

function Experience() {
  const expTitle = experience[0].Title;
  const eduTitle = experience[1].Title;
  const expsubTitle = experience[2].subTitle;
  const edusubTitle = experience[3].subTitle
  const expDetails = experience[4].Details;
  const eduDetails = experience[5].Details;
  const [show, setShow] = useState("");
  const [details, setDetails] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDetail, setProjectDetail] = useState("");
  const [projectimg, setProjectimg] = useState("");  

  const images = [
    Project1,
    Project2,
    Project3,
    Project4,
    Project5,
    Project6
  ]

  const handleExpLink = (idx) => {
    setTitle(expTitle[idx]);
    setDetails(expDetails[idx]);
    setSubTitle(expsubTitle[idx]);
    if (title === expTitle[idx]) {
      setTitle("");
      setDetails("");
      setSubTitle("");
    }
  }

  const handleEduLink = (idx) => {
    setTitle(eduTitle[idx]);
    setDetails(eduDetails[idx]);
    setSubTitle(edusubTitle[idx]);
    if (title === eduTitle[idx]) {
      setTitle("");
      setDetails("");
      setSubTitle("");
    }
  }

  const handleProjLink = (idx) => {
    setProjectTitle(project[idx].caption);
    setProjectDetail(project[idx].details);
    setProjectimg(images[idx]);
    if (projectTitle === project[idx].caption) {
      setProjectTitle("");
      setProjectDetail("");
      setProjectimg("");
    }
  }

  return (
    <div>
      <div className="expHeader">
        <Link to="#" onClick={() => { (show !== 'experience') ? setShow('experience') : setShow('') }}>Experience</Link>
        <Link to="#" onClick={() => { (show !== 'projects') ? setShow('projects') : setShow('') }}>Projects</Link>
      </div>
      {
        (show === 'experience') ?
          <div>
            <div className="subTitleContainer">
              <div className="subTitle">
                <h2>Work Related</h2>
                <div className="detailsBlock">
                  <h2 className="title">{title}</h2>
                  <h3 className="location">{subTitle}</h3>
                  <p>
                    {details}
                  </p>
                </div>
              </div>
            </div>
            <div className="expItems">
              {expTitle.map((data, idx) => {
                return (
                  <Link to="#" className="items" onClick={() => handleExpLink(idx)} key={idx}>{data}</Link>
                )
              }
              )}

            </div>
            <div className="subTitle">
              <h2>Education</h2>
            </div>
            <div className="eduItems">
              {eduTitle.map((data, idx) => {
                return (
                  <Link to="#" className="items" onClick={() => handleEduLink(idx)} key={idx}>{data}</Link>
                )
              }
              )}
            </div>
          </div>
          : null}

      {
        (show === 'projects') ?
          <div className='project-container'>
            {(projectimg !== "") ?
              <div className="projects">
                <img className="projectImg" src={projectimg} alt="project test" />
                <div className="overlay" />
                <div className="projectInfo">
                  <h2 className="projectTitle">{projectTitle}</h2>
                  <p className="projectDetails">{projectDetail}</p>
                </div>
              </div>
              : null}

            <div className="projectSelect">
              {project.map((data, idx) => {
                return (
                  <Link to="#" className="projectTitles" onClick={() => handleProjLink(idx)} key={idx}>{data.caption}</Link>
                )
              })}
            </div>
          </div>
          : null
      }
    </div>
  )
}

export default Experience