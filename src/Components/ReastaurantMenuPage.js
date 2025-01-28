import { useEffect, useState } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) {
        return (
            <ShimmerComponent />
        );
    };

    const { name, cuisines, costForTwoMessage } = 
        resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return ( 
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item) => (
                    <li key="item?.card?.info?.name">
                        {item?.card?.info?.name} - {" Rs."}{item?.card?.info?.price/100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;