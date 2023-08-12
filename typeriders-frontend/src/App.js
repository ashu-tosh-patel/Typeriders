import './App.css';
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

//main image
import Logo from './assets/mainicon.png';

function App() {

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
            <Route path="/multi" element={<Multiplayer />} />
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
