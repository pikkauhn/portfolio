import React, { useEffect, useRef, useState } from 'react'
import loadHum from '../../assets/sounds/loadHum.wav';
import congrats from '../../assets/sounds/congrats.mp3';
import { Link, useNavigate } from 'react-router-dom';



import './Launch.css'

function Launch() {
    const [details, setDetails] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [start, setStart] = useState(false);
    const isMounted = useRef(true);
    const navigate = useNavigate();
    let delay = 0;
    let content = "";
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const length = 1000;
    for (let i = 0; i < length; i++) {
        content += characters[Math.floor(Math.random() * characters.length)]
    };
    let typingInterval;
    const hum = new Audio(loadHum);
    
    const handleLink = () => {
        hum.pause();
        hum.currentTime = 0;
        const congratulations = new Audio(congrats);
        congratulations.play();
        setTimeout(() => {
            navigate('/aboutMe');
        }, 4000);
    };

    useEffect(() => {

        if (start) {
            hum.play();
            setTimeout(() => {typing()}, 3000);
        }
        return () => {
            hum.pause();
            hum.currentTime = 0;
        };
    }, [start]);

    useEffect(() => {
        if (loaded) {
            setDetails("")
            delay = 80;
            content = "LOAD SUCCESSFUL. . . . . . . . . . . . . .";
            typing();
        }
    }, [loaded]);

    let i = 0;
    const typing = () => {
        if (i < content.length && isMounted.current) {
            const char = content.charAt(i);

            if (typeof details != "undefined") {
                setDetails((prevText) => prevText + char);
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
            {(!start) ? <Link onClick={() => { setStart(true) }}>START</Link> : null}
            {(start) ? <p>{details}</p> : null}
            {(showButton) ?
                <Link to="#" id="launchButton" onClick={handleLink}>
                    LAUNCH!
                </Link>
                : null}
        </div>
    )
}

export default Launch