import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from '../utils/constants';
import UserContext from "../utils/userContext";

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCardComponent = (props) => {
    const { resData } = props;
    const { loggedInUser } = useContext(UserContext);

    return (
        <div
            data-testId="resCard"
            className="m-2 p-2 w-[230px] rounded-lg h-[400px] bg-gray-100 hover:bg-gray-200">
            <img
                alt="Burger"
                className="rounded-lg h-28 w-60"
                src={CDN_URL +
                    resData?.card?.card?.info?.cloudinaryImageId
                }
            />
            <h3 className="font-bold py-2 text-lg">{resData?.card?.card?.info?.name}</h3>
            <h4>{resData?.card?.card?.info?.cuisines.join(", ")}</h4>
            <h4>{resData?.card?.card?.info?.avgRating} stars</h4>
            <h4>{resData?.card?.card?.info?.costForTwo}</h4>
            <h4>{resData?.card?.card?.info?.sla?.deliveryTime} minutes</h4>
            <h4>User : {loggedInUser}</h4>
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
                <RestaurantCardComponent {...props} />
            </div>
        );
    };
};

export default RestaurantCardComponent;