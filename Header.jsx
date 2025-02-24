import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    return(
        <>
            <header>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li>
                        <NavLink className="navbar-option1" to="/">EDUCATION.</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-option" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-option" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-option" to="/course">Courses</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-option" to="/team">Team</NavLink>
                    </li>
                    <li>
                        <button className="header-btn"><a style={{textDecoration: 'none', color: 'white'}} href="/contact">Join us</a></button>
                    </li>
                </ul>
            </nav>
            </header>
        </>
    )
}


export default Header;