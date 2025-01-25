import { useEffect, useState } from "react";
import ShimmerComponent from "./ShimmerComponent";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=210945&catalog_qa=undefined&query=Biryani&submitAction=ENTER"
        );
        const json = await data.json();
        setResInfo(json.data);
    }

    // const { name, cuisines, costForTwo } = 
    //     resInfo?.cards[2]?.card?.card?.info;

    return (resInfo === null) ? (
    <ShimmerComponent />
    ) : ( 
        <div className="menu">
            <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <p>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")} - {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Lite Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;