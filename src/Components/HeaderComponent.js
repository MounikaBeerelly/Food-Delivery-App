import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnileStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector, useDispatch } from 'react-redux';

const HeaderComponent = () => {

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnileStatus();
    const {loggedInUser} = useContext(UserContext);

    //selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-yellow-100 sm:bg-blue-100 lg:bg-red-100 shadow-md mb-3">
            <div className="logo-container">
                <img src={LOGO_URL} 
                    className="w-28" 
                    alt="Food delivery online" 
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">Cart ({cartItems.length} items)</Link>
                    </li>
                    <button 
                        className="px-4"
                        onClick={() => {
                            btnName === "Login" 
                            ? setBtnName("Logout")
                            : setBtnName("Login");
                        }}
                    >
                        {btnName}
                    </button>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;