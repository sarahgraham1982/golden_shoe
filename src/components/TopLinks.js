import React from 'react';
import { NavLink } from 'react-router-dom'
import account from './account.png';
import cart from './cart.png';
import search from './search.png';
import '../css/TopLinks.css';



const TopLinks = () => {
    return (
        <div className="top-links">
            <ul>    
                <li>
                    <NavLink to="/cart"><img src={cart} alt="cart"/></NavLink>
                </li>
                <li>
                    <NavLink to="/"><img src={search} alt="search"/></NavLink>
                </li>
                <li>
                    <NavLink to="/"><img src={account} alt="account"/></NavLink>
                </li>    
              </ul>

        </div> 
        );



}

export default TopLinks;