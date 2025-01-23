import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCardComponent from "./RestaurantCardComponent";
import swiggyData from '../SwiggyData.json';

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

export default BodyComponent;