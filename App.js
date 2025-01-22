import React from "react";
import ReactDOM from "react-dom/client";
import swiggyData from './SwiggyData.json';

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
    const {resData} = props;
    return (
        <div className="res-card" style={styleCard}>
            <img
                 alt="Burger"
                 className="res-logo"
                 src={"https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/" + 
                    resData?.card?.card?.info?.cloudinaryImageId
                 }
                />
            <h3>{resData?.card?.card?.info?.name}</h3>
            <h5>{resData?.card?.card?.info?.cuisines.join(", ")}</h5>
            <h5>{resData?.card?.card?.info?.avgRating} stars</h5>
            <h5>{resData?.card?.card?.info?.costForTwo}</h5>
            <h5>{resData?.card?.card?.info?.sla?.deliveryTime} minutes</h5>
        </div>
    )
}

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {swiggyData?.data?.cards?.map(
                    restaurant => 
                        <RestaurantCardComponent 
                            key = {restaurant?.card?.card?.info?.id}
                            resData = {restaurant} 
                        />
                )}
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