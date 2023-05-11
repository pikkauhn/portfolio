import React, { useEffect, useRef } from 'react';
import githubIcon from '../assets/images/icons/githubIcon.svg';
import linkedInIcon from '../assets/images/icons/linkedInIcon.svg';
import instaIcon from '../assets/images/icons/instaIcon.svg'

function Footer() {
  const gitRef = useRef(null);
  const linkedRef = useRef(null);
  const instaRef = useRef(null);

  useEffect(() => {
    if (gitRef.current) {
      gitRef.current.src = githubIcon;
    }
    if (linkedRef.current) {
      linkedRef.current.src = linkedInIcon;
    }
    if (instaRef.current) {
      instaRef.current.src = instaIcon;
    }
  }, [])


  return (
    <div>
      <div className="Footer">
        <hr className="outerLine" />
        <img ref={gitRef} alt="gitHub" />
        <hr className="innerLine" />
        <img ref={linkedRef} alt="linkedIn" />
        <hr className="innerLine" />
        <img ref={instaRef} alt="instagram" />
        <hr className="outerLine" />
        <div className="myEmail">
          <p>pikkauhn@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer