// Profile.js
import React from 'react';
import './Profile.css'; // Import the CSS file for styling

const Profile = (props) => {
  const {
    profileImage,
    name,
    email,
    gamesPlayed,
    averageTypingSpeed,
    bestTypingSpeed,
  } = props;

  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="profile-details">
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Games Played: {gamesPlayed}</p>
        <p>Average Typing Speed: {averageTypingSpeed} WPM</p>
        <p>Best Typing Speed: {bestTypingSpeed} WPM</p>
      </div>
    </div>
  );
};

export default Profile;
