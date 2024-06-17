'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PrimeIcons } from 'primereact/api';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import me from '../../assets/images/me.jpg';
import './Navbar.css';
import useResponsiveStrings from '../useResponsiveStrings'

const Navbar = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const { pageContent } = useResponsiveStrings();
  const router = useRouter();

  return (
    <>
      {pageContent === 'pageContentMobile' ?
        <>
          <Button className='menuButton' visible={!visible} outlined icon={PrimeIcons.BARS} onClick={() => setVisible(true)} />
          <Sidebar className='sideBar' showCloseIcon={false} visible={visible} onHide={() => setVisible(false)}>
            <div className="grid">
              <span className="ml-1 col">
                <h2 className='menuHeader'>Menu</h2>
                <Button outlined className='menuButtons w-10 mb-2' label="About Me" onClick={() => { router.replace('/'); setVisible(false) }} />
                <Button outlined className='menuButtons w-10 mb-2' label="Projects" onClick={() => { router.replace('/Projects'); setVisible(false) }} />
                <Button outlined className='menuButtons w-10 mb-2' label="Education" onClick={() => { router.replace('/Education'); setVisible(false) }} />
                <Button outlined className='menuButtons w-10' label="Experience" onClick={() => { router.replace('/Experience'); setVisible(false) }} />
              </span>
              <span className='ml-1'>
                <Button outlined className='menuButtons mr-2 ml-6' onClick={() => { window.open("https://github.com/pikkauhn", '_blank') }} icon='pi pi-github' />
                <Button outlined className='menuButtons' onClick={() => { window.open("https://www.linkedin.com/in/zachary-a-burns/", '_blank') }} icon='pi pi-linkedin' />
              </span>
            </div>
          </Sidebar>
        </>
        :
        <div className="flex flex-row flex-wrap">
          <div className='flex shape mt-3'>
            <Image className="profile" alt='Profile Picture' src={me} />

          </div>
          <div className='navBar flex mt-6'>
            <div className="linkies">
              <a href="/">About Me</a>
              <a href="/Projects">Projects</a>
              <a href="/Education">Education</a>
              <a href="/Experience">Experience</a>
              <a href="https://github.com/pikkauhn" target="_blank"><i className='pi pi-github' /></a>
              <a href="https://www.linkedin.com/in/zachary-a-burns/" target="_blank"><i className='pi pi-linkedin' /></a>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Navbar