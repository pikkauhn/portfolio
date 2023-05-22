import React, { useEffect, useState } from 'react'
import './Experience.css'
import { Link } from 'react-router-dom'
import experience from '../../assets/jsons/experience.json'

function Experience() {
  const expTitle = experience[0].Title;
  const eduTitle = experience[1].Title;
  const expDetails = experience[2].Details;
  const eduDetails = experience[2].Details;
  const [show, setShow] = useState("");
  const [details, setDetails] = useState("");
  const [title, setTitle] = useState("");

  const handleExpLink = (idx) => {
    setTitle(expTitle[idx]);
    setDetails(expDetails[idx]);

  }

  const handleEduLink = (idx) => {
    setTitle(eduTitle[idx]);
    setDetails(eduDetails[idx]);

  }

  return (
    <div>
      <div className="expHeader">
        <Link to="#" onClick={() => {(show !== 'experience') ? setShow('experience') : setShow('')}}>Experience</Link>
        <Link to="#">Projects</Link>
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
    </div>
  )
}

export default Experience