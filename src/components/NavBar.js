import React from 'react';
import { Link } from "react-router-dom";
import '../css/NavBar.css';



const NavBar = () => {
    return (
        <>
          <div className="Nav-Container">
            <div className="NavBar">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/new">New In</Link>
                </li>
                <li>
                  <Link to="/heels">Heels</Link>
                </li>
                <li>
                  <Link to="/boots">Boots</Link>
                </li>
                <li>
                  <Link to="/flats">Flats</Link>
                </li>
                <li>
                  <Link to="/contact">FAQ/Help</Link>
                </li>
              </ul>
              
            </div>
          </div>  
        </>
        );



}

export default NavBar;