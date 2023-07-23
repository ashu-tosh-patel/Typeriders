import React from "react"
import { NavLink } from "react-router-dom"


import './Sidebar.css'

//images
import singleimg from '../assets/singleplayer.png'
import multiimg from '../assets/multiplayer.png'
import logo from '../assets/mainicon.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <p>TypeRiders</p>
      </div>
      <nav className="links">
        <ul>
          <li>
            <NavLink to="/single">
              <img src={singleimg} alt="##"></img>
              <span>Single Player</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/multi">
              <img src={multiimg} alt="##"></img>
              <span>Multi Player</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Sidebar;
