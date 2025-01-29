import React, {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import RestaurantCardComponent, { withPromotedLabel } from "./RestaurantCardComponent";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";
import useOnileStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const BodyComponent = () => {
    // state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCardComponent);

    const {loggedInUser, setUserName} = useContext(UserContext);

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

    // custom hook 

    const onlineStatus = useOnileStatus();

    if(onlineStatus === false) return <h1> Looks like you are offline!! Please check your internet connection.</h1>
    
    return listOfRestaurants.length === 0 ? (
        <ShimmerComponent /> 
    ) : (
        <div className="body">
            <div className="flex">
                <div className="search m-4 p-4">
                    <input 
                        type="text" 
                        className="border border-solid border-black"
                        value = {searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button 
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
                <div className="button p-4 m-4 flex items-center">
                <button 
                    className="px-4 py-2 mr-9 bg-gray-100 rounded-lg"
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
                    className="px-4 py-2 bg-blue-50 rounded-lg"
                    onClick={() => {
                        const filterDistance = listOfRestaurants?.filter(
                            res => res?.card?.card?.info?.sla?.deliveryTime < 30
                        );
                        setListOfRestaurants(filterDistance);
                    }}>
                    Less Distance Restaurants
                </button>
                </div>
                <div className="search m-8 p-4 items-center">
                    <label>UserName : </label>
                    <input 
                        type="text" 
                        className="border border-solid border-black"
                        value = {loggedInUser}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                    </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurantData?.map(
                    restaurant => (
                        <Link to={"/restaurants/" + restaurant?.card?.card?.info?.id}>
                           {/* if restaurant is promoted, show the promoted label top of it */}
                           {restaurant?.card?.card?.info?.promoted ? (
                            <RestaurantCardPromoted 
                                key = {restaurant?.card?.card?.info?.id}
                                resData = {restaurant} />
                            ) : (
                            <RestaurantCardComponent 
                                key = {restaurant?.card?.card?.info?.id}
                                resData = {restaurant} 
                            />
                        )}
                        </Link>
               ) )}
            </div>
        </div>
    )
}

export default BodyComponent;