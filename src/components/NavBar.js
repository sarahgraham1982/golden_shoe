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
                  <Link to="/all">Shop All</Link>
                </li>
                <li>
                  <Link to="/new">New</Link>
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
                  <Link to="/sandles">Sandles</Link>
                </li>
                <li>
                  <Link to="/trainers">Trainers</Link>
                </li>
                <li>
                  <Link to="/slippers">Slippers</Link>
                </li>
                <li>
                  <Link to="/customerservice">FAQ/Contact</Link>
                </li>
                
              </ul>
              
            </div>
          </div>  
        </>
        );



}

export default NavBar;