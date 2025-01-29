import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from '../utils/constants';

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCardComponent = (props) => {
    const {resData} = props;
    return (
        <div className="m-2 p-2 w-[230px] rounded-lg h-[400px] bg-gray-100 hover:bg-gray-200">
            <img
                 alt="Burger"
                 className="rounded-lg h-28 w-60"
                 src={CDN_URL + 
                    resData?.card?.card?.info?.cloudinaryImageId
                 }
                />
            <h3 className="font-bold py-2 text-lg">{resData?.card?.card?.info?.name}</h3>
            <h5>{resData?.card?.card?.info?.cuisines.join(", ")}</h5>
            <h5>{resData?.card?.card?.info?.avgRating} stars</h5>
            <h5>{resData?.card?.card?.info?.costForTwo}</h5>
            <h5>{resData?.card?.card?.info?.sla?.deliveryTime} minutes</h5>
        </div>
    );
};

// HOC: input - RestaurantCardComponent => RestaurantPromotedComponent

export const withPromotedLabel = (RestaurantCardComponent) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Promoted
                </label>
                <RestaurantCardComponent {...props}/>
            </div>
        );
    };
};

export default RestaurantCardComponent;