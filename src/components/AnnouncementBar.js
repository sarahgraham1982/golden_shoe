import React from 'react';
import { Link } from "react-router-dom";
import '../css/AnnouncementBar.css';

const AnnouncementBar = () => {
    return (
        <div className="announcement-bar">
            <ul>
                <li>
                    <Link to="/CustomerService">FREE UK DELIVERY & RETURNS!</Link>
                </li>
            </ul>
        </div>
    )
}


export default AnnouncementBar;

