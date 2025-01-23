import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from '../utils/constants';

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCardComponent = (props) => {
    const {resData} = props;
    return (
        <div className="res-card" style={styleCard}>
            <img
                 alt="Burger"
                 className="res-logo"
                 src={CDN_URL + 
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

export default RestaurantCardComponent;