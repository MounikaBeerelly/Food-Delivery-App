import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {

    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} 
                    className="logo" 
                    alt="Food delivery online" 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button 
                        className="login-btn"
                        onClick={() => {
                            btnName === "Login" 
                            ? setBtnName("Logout")
                            : setBtnName("Login");
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;