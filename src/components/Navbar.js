import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => (

    <nav>
        <NavLink activeclassname="active" className="home-link" to="/">
          Home
        </NavLink>
        <NavLink activeclassname="active" className="contact-link" to="/contact">
          Contact
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          Portfolio
        </NavLink>
    </nav>
)


export default Navbar;
