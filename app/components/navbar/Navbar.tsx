'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import me from '../../assets/images/me.jpg';
import { PrimeIcons } from 'primereact/api';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';



import './Navbar.css';
import useWindowWidth from '../useWindowWidth'

const Navbar = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const width = useWindowWidth();
  const router = useRouter();

  return (
    <>
      {width < 900 ?
      <>
        <Button outlined icon={PrimeIcons.BARS} onClick={() => setVisible(true)}/>
        <Sidebar className='sideBar' visible={visible} onHide={() => setVisible(false)}>
        <Button outlined label="About Me" onClick={() => {router.replace('/')}}/>
        <Button outlined label="Projects" onClick={() => {router.replace('/Projects')}}/>
        <Button outlined label="Education" onClick={() => {router.replace('/Education')}}/>
        <Button outlined label="Experience" onClick={() => {router.replace('/Experience')}}/>
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
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Navbar