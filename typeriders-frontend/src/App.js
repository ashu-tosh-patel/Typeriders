import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";

// Importing Pages
import Multiplayer from './pages/MultiPlayer';
import Singleplayer from './pages/SinglePlayer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Guest from './pages/Guest';
import Profile from './pages/Profile';

// Importing Components
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import HandlePopup from './pages/HandlePopup';

//main image
import Logo from './assets/mainicon.png';

function App() {
  //settings for difficulty popup
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [selectedDifficulty, setSelectedDifficulty] = useState('');
  // const [selectedWordCount, setSelectedWordCount] = useState(0);

  // const openPopup = () => {
  //   setIsPopupOpen(true);
  // };
  // const closePopup = () => {
  //   setIsPopupOpen(false);
  // };
  // const handleSelectDifficulty = (difficulty, wordCount) => {
  //   setSelectedDifficulty(difficulty);
  //   setSelectedWordCount(wordCount);
  // };

  //dummy user data
  const user = {
    profileImage: Logo,
    name: 'Ashutosh Patel',
    email: 'ashu9889@example.com',
    gamesPlayed: 25,
    averageTypingSpeed: 50,
    bestTypingSpeed: 80,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Routes>

            <Route path="/" element={<Profile {...user} />} />
            <Route path="/single" element={<Singleplayer />} />
            <Route path="/multi" element={<HandlePopup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/guest" element={<Guest />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
