import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function MobileBanner() {
    const [hold, setHold] = useState(false)
    const [time, setTime] = useState(null)

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition()

    if (!browserSupportsSpeechRecognition) {
        return (
            <span>Votre navigateur ne supporte pas Speech To Text</span>
        )
    }
    const listeningSpeech = () => {
        setHold(true);
        const timer = setInterval(() => {
            console.log('tazomina')
        }, 1000)
        setTime(timer)
        SpeechRecognition.startListening();

    }
    const listeningStop = () => {
        setHold(false);
        if (time) {
            console.log('votitra')
            clearInterval(time);

        }
        setTime(null)
        SpeechRecognition.stopListening()
    }

    const listeningReset = () => {
        reseTranscript()
    }



    return (
        <>
            <div
                className="mob-banner"
                style={{
                    backgroundColor: '#f0f0f0',
                    padding: '1rem',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <FontAwesomeIcon
                    icon={faTimes}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        fontSize: '24px',
                        cursor: 'pointer',
                        color: '#333',
                    }}
                    onClick={() => window.location.href = '/chat'}
                />
                <div
                    className="mob-banner-vertical"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <h2 style={{ marginBottom: '1rem', fontSize: '24px', color: '#007660' }}>
                        Bonjour, bienvenue chez tech For All
                    </h2>
                    <FontAwesomeIcon
                        icon={faCircle}
                        style={{
                            color: listening ? 'green' : 'red',
                            fontSize: '30px', marginBottom: '0.5rem'
                        }}
                    />

                    <button
                        onMouseDown={listeningSpeech} onMouseUp={listeningStop} onTouchStart={listeningSpeech} onTouchEnd={listeningStop}
                        className="micro-btn"
                        style={{
                            width: '175px',
                            height: '175px',
                            backgroundColor: '#333',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                            cursor: 'pointer',
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faMicrophone}
                            style={{ fontSize: '50px', color: '#fff' }}
                        />
                    </button>

                    <h3 style={{ paddingTop: '10px', fontSize: '20px' }}>{transcript}</h3>
                </div>
            </div>

        </>

    );
}
