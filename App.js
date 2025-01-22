import React from "react";
import ReactDOM from "react-dom/client";
 
const styleCard = {
    backgroundColor: "#f0f0f0"
}

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://media.licdn.com/dms/image/v2/D5612AQFaEcVPcxUT9w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1693211333774?e=2147483647&v=beta&t=Z2wA6gMQ4AKNlp0JL8eguiE4k9fGFw61O75CN2FJqhI" 
                    className="logo" 
                    alt="Food delivery online" 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCardComponent = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/yf0ifapaat84dsrsvvrm"
                 alt="Burger"
                 className="res-logo"
                />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.5 stars</h4>
            <h4>40 minutes</h4>
        </div>
    )
}

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCardComponent 
                    resName="Burger King"
                    cuisine="Burger, Pizza, Chinese"
                 />
                <RestaurantCardComponent
                    resName="KFC"
                    cuisine="Burger, KFC, Wings"
                 />
            </div>
        </div>
    )
}

const AppLayoutComponent = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <BodyComponent />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);