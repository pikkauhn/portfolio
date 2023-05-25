import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import experience from '../../assets/jsons/experience.json';
import project from '../../assets/jsons/project.json';
import ProjectTest from '../../assets/images/ProjectTest.png';
import './Experience.css'

function Experience() {
  const expTitle = experience[0].Title;
  const eduTitle = experience[1].Title;
  const expDetails = experience[2].Details;
  const eduDetails = experience[2].Details;
  const [show, setShow] = useState("");
  const [details, setDetails] = useState("");
  const [title, setTitle] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDetail, setProjectDetail] = useState("");
  const [projectimg, setProjectimg] = useState("");

  const handleExpLink = (idx) => {
    setTitle(expTitle[idx]);
    setDetails(expDetails[idx]);
    if (title === expTitle[idx]) {
      setTitle("")
      setDetails("")
    }
  }

  const handleEduLink = (idx) => {
    setTitle(eduTitle[idx]);
    setDetails(eduDetails[idx]);
    if (title === eduTitle[idx]) {
      setTitle("");
      setDetails("");
    }
  }

  const handleProjLink = (idx) => {
      setProjectTitle(project[idx].caption);
      setProjectDetail(project[idx].details);
      setProjectimg(project[idx].image);
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
                  <h3 className="title">{title}</h3>
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
                <img className="projectImg" src={projectimg} alt={projectimg} />
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