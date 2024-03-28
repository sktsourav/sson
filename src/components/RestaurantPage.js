import { useState, useEffect } from "react";
import { GET_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
    const [restaurantData, setRestaurantData] = useState(null)
    const {resId} = useParams();

    const fetchMenu = async () => {
        const data = await fetch(GET_MENU_URL + resId);
        const menu = await data.json();
        console.log("Menu", menu);
        setRestaurantData(menu)
    }


    useEffect(() => {
        fetchMenu()
    }, [])

    if (restaurantData === null) return <Shimmer />

    const { name, avgRating, cuisines, costForTwoMessage } = restaurantData?.data?.cards[2]?.card?.card?.info;
    const menuOptions = restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <p>Ratting - {avgRating}</p>

            <h2>Menu</h2>
            {
                menuOptions?.map((option) => (
                    option?.card?.card?.itemCards ?
                        (
                            <div>
                                <h3><u>{option?.card?.card?.title}</u></h3>
                                {option?.card?.card?.itemCards.map(menu => (
                                    <li>{menu?.card?.info?.name} - ₹{menu?.card?.info?.price / 100}</li>

                                ))}
                            </div>
                        )
                        : ""
                ))
            }
        </div>
    )
}

export default RestaurantPage;