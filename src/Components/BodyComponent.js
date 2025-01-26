import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import RestaurantCardComponent from "./RestaurantCardComponent";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";

const BodyComponent = () => {
    // state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards);
        setFilteredRestaurantData(json?.data?.cards);
    };

    // Conditional rendering
    // if(listOfRestaurants.length === 0){
    //     return <ShimmerComponent />
    // }

    return listOfRestaurants.length === 0 ? (
        <ShimmerComponent /> 
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box"
                        value = {searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button 
                        className="search-btn"
                        // filter the restaurant cards and update the UI
                        // search text
                        onClick={() => {
                            const searchList = listOfRestaurants?.filter(
                                (restaurant) => 
                                    restaurant?.card?.card?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()) 
                            );
                            setFilteredRestaurantData(searchList);
                        }}
                    >
                        Search
                    </button>
                </div>
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
                            res => res?.card?.card?.info?.sla?.deliveryTime < 30
                        );
                        setListOfRestaurants(filterDistance);
                    }}>
                    Less Distance Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurantData?.map(
                    restaurant => (
                        <Link to={"/restaurants/" + restaurant?.card?.card?.info?.id}>
                            <RestaurantCardComponent 
                                key = {restaurant?.card?.card?.info?.id}
                                resData = {restaurant} 
                            />
                        </Link>
               ) )}
            </div>
        </div>
    )
}

export default BodyComponent;