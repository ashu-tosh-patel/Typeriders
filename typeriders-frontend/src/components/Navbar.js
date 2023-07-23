import React from "react"
import { Link } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li className="title">Ram Ram!</li>
                <>
                    <li className="btn"><Link to="/login">Login</Link></li>
                    <li className="btn"><Link to="/signup">Signup</Link></li>
                    <li className="btn"><Link to="/guest">Guest</Link></li>
                </>
                <>
                    <li>
                        <button className="btn" >Logout</button>
                    </li>
                </>
            </ul>
        </nav>
    )
};

export default Navbar;
