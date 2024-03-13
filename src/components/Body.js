import { useState } from "react"
import RestaurantsList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [restaurantsList, setRestaurantsList] = useState(RestaurantsList)
    return (
        <div className="body">
            <button className="filter-btn" onClick={() => {
                const filteredList = RestaurantsList.filter(res => res?.info?.avgRating >= 4)
                setRestaurantsList(filteredList)
            }}
            >
                Filter by ratting</button>
            <div className="restaurant-container">
                {
                    restaurantsList.map((restaurant) => (
                        <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;