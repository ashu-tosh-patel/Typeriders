import React, { useState, useEffect, useRef } from 'react';
import './SinglePlayer.css';

const SinglePlayer = () => {
  const paragraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Suspendisse potenti. Donec varius quam non felis vehicula dictum.',
    'Pellentesque interdum ex ut felis ultrices volutpat.',
    'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse bibendum felis nec risus eleifend, in venenatis libero fermentum.',
    // Add more paragraphs here
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
    if (currentWordIndex === 0) return 0; // To avoid division by zero
    const minutes = (Date.now() - startTime) / (1000 * 60);
    const wordsTyped = currentWordIndex;
    const wpm = Math.round(wordsTyped / minutes);
    return wpm;
  };

  return (
    <div>
      <div>
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
        <p>Words Per Minute: {startTime ? calculateWordsPerMinute() : 0}</p>
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={handleInputChange}
          autoFocus
        />
      </div>
      <button onClick={generateRandomParagraph}>Next Paragraph</button>
    </div>
  );
};

export default SinglePlayer;
