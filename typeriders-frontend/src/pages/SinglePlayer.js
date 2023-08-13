import React, { useState, useEffect, useRef } from 'react';
import './SinglePlayer.css';

const SinglePlayer = () => {
    const paragraphs = [
        'Tumhein Dil Nisaar Karte Tumhein Jaan Nisaar Karte Tum Pyar Karne Dete Toh Tumhe Kitna Pyar Karte Ik Baar Karne Dete Toh Tumhe Kitna Pyar Karte',
        'apple banana chair dog elephant frog guitar hat ice jelly kite lemon mango napkin orange piano queen rabbit sun tiger',
        'Aankhon Par Tumhari Aksar Ghazal Sunate Aankhon Par Tumhari Aksar Ghazal Sunate Kitni Wafa Hai Iss Dil Mein Har Din Tumhein Dikhate Har Din Tumhein Dikhate',
        'Taareef Hum Tumhari Yoon Beshumaar Karte',
    ];

    const [currentParagraph, setCurrentParagraph] = useState('');
    const [words, setWords] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [score, setScore] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        generateRandomParagraph();
    }, []);

    const generateRandomParagraph = () => {
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
        const paragraph = paragraphs[randomIndex];
        setCurrentParagraph(paragraph);
        setWords(paragraph.split(' '));
        setCurrentWordIndex(0);
        setUserInput('');
        setScore(0);
        setStartTime(null);
    };

    useEffect(() => {
        if (currentWordIndex === 0) {
            setStartTime(Date.now());
        }
    }, [currentWordIndex]);

    useEffect(() => {
        if (currentWordIndex < words.length) {
            const wordToType = words[currentWordIndex];
            const enteredWord = userInput.trim();
            if (enteredWord === wordToType) {
                setCurrentWordIndex((prevIndex) => prevIndex + 1);
                setScore((prevScore) => prevScore + 1);
                setUserInput('');
            }
        }
    }, [userInput, words, currentWordIndex]);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setUserInput(value);
    };

    const calculateWordsPerMinute = () => {
        if (currentWordIndex === 0) return 0;
        const minutes = (Date.now() - startTime) / (1000 * 60);
        const wordsTyped = currentWordIndex;
        const wpm = Math.round(wordsTyped / minutes);
        return wpm;
    };

    return (
        <div>
            <div>
                <h3>PARAGRAPH TO BE TYPED :- </h3>
                <p>{currentParagraph}</p>
                <p>
                    {words.map((word, index) => (
                        <span
                            key={index}
                            className={index === currentWordIndex ? 'current-word' : ''}
                        >
                            {word}{' '}
                        </span>
                    ))}
                </p>
            </div>
            <div>
                <p>Score: {score}</p>
                <div className="box">
                    <h4>Type here :-</h4>

                    <input
                        className="form"
                        ref={inputRef}
                        type="text"
                        value={userInput}
                        onChange={handleInputChange}
                        autoFocus
                    />
                    {score === words.length && <p>Words Per Minute:  {calculateWordsPerMinute()}</p>}
                </div>
            </div>
            <button className="btn" onClick={generateRandomParagraph}>Next Paragraph</button>
        </div>
    );
};

export default SinglePlayer;
