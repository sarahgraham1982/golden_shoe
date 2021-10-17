import React from 'react';
import '../css/Header.css';
import logo from './logo.png';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-image">

            <NavLink to="/"><img src={logo} alt="logo"/></NavLink>

        </div> 
    )
}


export default Header;



