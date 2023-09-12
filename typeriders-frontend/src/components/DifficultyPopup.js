import React from 'react';
import './DifficultyPopup.css'; // Import the CSS file for styling

const DifficultyPopup = ({ isOpen, onClose, onSelectDifficulty }) => {
  if (!isOpen) return null;

  const handleDifficultySelect = (difficulty, wordCount) => {
    onSelectDifficulty(difficulty, wordCount);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Select Difficulty Level</h2>
        <div className="difficulty-options">
          <div>
            <h3>Easy</h3>
            <button className="close-button" onClick={() => handleDifficultySelect('easy', 10)}>10 words</button>
            <button className="close-button" onClick={() => handleDifficultySelect('easy', 25)}>25 words</button>
            <button className="close-button" onClick={() => handleDifficultySelect('easy', 50)}>50 words</button>
            <button className="close-button" onClick={() => handleDifficultySelect('easy', 100)}>100 words</button>
          </div>
          <div>
            <h3>Medium</h3>
            <button className="close-button" onClick={() => handleDifficultySelect('medium', 10)}>10 words</button>
            <button className="close-button" onClick={() => handleDifficultySelect('medium', 25)}>25 words</button>
            <button className="close-button" onClick={() => handleDifficultySelect('medium', 50)}>50 words</button>
            <button className="close-button" onClick={() => handleDifficultySelect('medium', 100)}>100 words</button>
          </div>
          <div>
            <h3>Hard</h3>
            <button className="close-button" onClick={() => handleDifficultySelect('hard', 10)}>10 words</button>
            <button className="close-button" onClick={() => handleDifficultySelect('hard', 25)}>25 words</button>
            <button className="close-button" onClick={() => handleDifficultySelect('hard', 50)}>50 words</button>
            <button className="close-button" onClick={() => handleDifficultySelect('hard', 100)}>100 words</button>
          </div>
        </div>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DifficultyPopup;
