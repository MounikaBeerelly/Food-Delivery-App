import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import RestaurantCardComponent from "./RestaurantCardComponent";
import swiggyData from '../SwiggyData.json';

const BodyComponent = () => {
    // state variable
    const [listOfRestaurants, setListOfRestaurants] = useState(swiggyData?.data?.cards);

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants?.filter(
                            res => res?.card?.card?.info?.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
                <button
                    className="distance-res"
                    onClick={() => {
                        const filterDistance = listOfRestaurants?.filter(
                            res => res?.card?.card?.info?.sla?.deliveryTime < 20
                        );
                        setListOfRestaurants(filterDistance);
                    }}>
                    Less Distance Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants?.map(
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