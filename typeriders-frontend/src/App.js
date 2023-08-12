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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Routes>

            <Route path="/" element={<Profile/>} />
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
