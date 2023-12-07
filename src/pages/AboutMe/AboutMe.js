import React, { useEffect, useRef, useState } from 'react';
import abstract from "../../assets/images/abstract.jpg";
import typingSound from "../../assets/sounds/typingSound.wav";
import charSound from "../../assets/sounds/charSound.wav";
import charSound2 from "../../assets/sounds/charSound2.wav";
import charSound3 from "../../assets/sounds/charSound3.wav";
import './AboutMe.css';

function AboutMe() {
  let content = `Hello and thank you for visiting my portfolio! I'm Zachary Burns,<a recent Summa Cum Laude graduate of Capella University with a<Bachelor's degree in Software Development. During my time at Capella,<I consistently demonstrated a high level of skill and dedication to my<studies, earning recognition from both my professors and peers.<<I have experience working with Java, React, JavaScript,<Node.js, SQL, MySQL, and NoSQL (MongoDB), as well as various APIs.<I am currently learning Kotlin with Jetpack Compose, and I am<committed to continuing my education and professional development.<<Overall, I'm a driven and talented individual, and I'm looking forward to<making my mark in the world of software development.`;
  const [details, setDetails] = useState("");
  const imgRef = useRef();
  const isMounted = useRef(true);
  const volume = Math.random() * (.3 - .1) + .3;
  let typingInterval;

  useEffect(() => {
    let i = 0;
    const typing = () => {
      if (i < content.length && isMounted.current) {
        let sound;
        const char = content.charAt(i);
        if (char === " ") {
          sound = new Audio(typingSound);
          sound.volume = volume;
          sound.play();
          setDetails((prevText) => prevText + " ");
        } else if (char === "<") {
          sound = new Audio(typingSound);
          sound.volume = volume;
          sound.play();
          setDetails((prevText) => prevText + "<br>");
        } else {
          const randomNum = Math.floor(Math.random() * 3) + 1;
          switch (randomNum) {
            case 1:
              sound = new Audio(charSound);
              break;
            case 2:
              sound = new Audio(charSound2);
              break;
            case 3:
              sound = new Audio(charSound3);
              break;
          }
          sound.volume = volume;
          sound.play();
          if (typeof details != "undefined") {
            setDetails((prevText) => prevText + char);
          }
        }
        i++;
        const delay = Math.random() * (80 - 10) + 10;
        clearInterval(typingInterval);
        typingInterval = setInterval(typing, delay);
      }
      if (i === content.length || !isMounted.current) {
        clearInterval(typingInterval);
      }

    }
    typing();

    return () => {
      clearInterval(typingInterval);
    }
  }, []);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.src = abstract;
    }
  }, [])

  useEffect(() => {
    const handleBeforeUnload = () => {
      isMounted.current = false;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [])

  return (
    <div className="aboutMe">
      <div className="aboutImage">
        <img ref={imgRef} alt="abstract" />
        <div className="overlay" />
      </div>
      <div className="type">
        <h1>About Me</h1>
        <hr className="line1" />
        <div>
          <p dangerouslySetInnerHTML={{ __html: details }} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
