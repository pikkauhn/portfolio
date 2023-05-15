import React, { useEffect, useRef, useState } from 'react'
import loadHum from '../../assets/sounds/loadHum.wav';
import { Link } from 'react-router-dom';

import './Launch.css'

function Launch() {
    const [details, setDetails] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [start, setStart] = useState(false);
    const isMounted = useRef(true);
    let delay = 0;
    let content = "";
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const length = 2000;
    for (let i = 0; i < length; i++) {
        content += characters[Math.floor(Math.random() * characters.length)]
    };
    let typingInterval;
    let hum = new Audio(loadHum);

    useEffect(() => {
        if (start) {            
            hum.play();
            const typeout = setTimeout(typing, 3000);
        }
    }, [start]);    

    useEffect(() => {
        if (loaded) {            
            setDetails("")
            delay = 80;
            content = "LOADING SUCCESSFUL. . . . . . . . . .";
            typing();
        }
    }, [loaded])

    let i = 0;
    const typing = () => {
        if (i < content.length && isMounted.current) {
            const char = content.charAt(i);
            if (char === " ") {
                setDetails((prevText) => prevText + " ");
            } else if (char === "<") {
                setDetails((prevText) => prevText + "<br>");
            } else {
                if (typeof details != "undefined") {
                    setDetails((prevText) => prevText + char);
                }
            }
            i++;

            if (i < content.length) {
                clearInterval(typingInterval);
                typingInterval = setInterval(typing, delay);
            }
        }
        if (!isMounted) {
            clearInterval(typingInterval);
        }
        if (i === content.length) {
            clearInterval(typingInterval);
            if (loaded) {
                setShowButton(true);
            }
            if (!loaded) {
                setLoaded(true);
            }
        }

    }


    return (
        <div>
            <button onClick={() => { setStart(true) }}>START</button>
            {(start) ? <p>{details}</p> : null}
            {(showButton) ? <Link to="/aboutMe" id="launchButton">LAUNCH!</Link> : null}
        </div>
    )
}

export default Launch