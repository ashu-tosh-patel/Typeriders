import React, { useState } from 'react';
import DifficultyPopup from '../components/DifficultyPopup';

const HandlePopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedWordCount, setSelectedWordCount] = useState(0);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSelectDifficulty = (difficulty, wordCount) => {
    setSelectedDifficulty(difficulty);
    setSelectedWordCount(wordCount);
  };

  return (
    <div className="App">
      <button onClick={openPopup}>Select Difficulty</button>
      <DifficultyPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        onSelectDifficulty={handleSelectDifficulty}
      />
      {selectedDifficulty && (
        <p>Selected Difficulty: {selectedDifficulty}, Word Count: {selectedWordCount}</p>
      )}
    </div>
  );
};

export default HandlePopup;
