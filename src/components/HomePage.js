import React from 'react';
import { Link } from "react-router-dom";
import welcome from './welcome.png';
import '../css/HomePage.css';

const HomePage = () => {
    return (

        <div className="welcome-image">
        <img src={welcome} alt="welcome" className="responsive" ></img>        
        </div> 
       

    );
};









export default HomePage;