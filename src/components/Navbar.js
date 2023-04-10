import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => (

    <nav>
        <NavLink activeclassname="active" className="home-link nav-link" to="/">
          Home
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link nav-link" to="/portfolio">
          Projects
        </NavLink>
        <NavLink activeclassname="active" className="about-link nav-link" to="/about">
          About
        </NavLink>
    </nav>
)


export default Navbar;
