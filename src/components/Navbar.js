import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => (

    <nav>
        <NavLink activeclassname="active" className="contact-link" to="/contact">
          Contact
        </NavLink>
    </nav>
)


export default Navbar;
