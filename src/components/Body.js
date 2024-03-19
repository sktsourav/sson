import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchRestaurants();
    }, [])

    const fetchRestaurants = async () => {
        const data = await fetch(SWIGGY_URL)
        const resList = await data.json();
        setRestaurantList(resList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const search = () => {
        const searchList = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setRestaurantList(searchList)
    }

    return restaurantList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)} />
                    <button onClick={search}>
                        Search
                    </button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = restaurantList.filter(res => res?.info?.avgRating >= 4.2)
                    setRestaurantList(filteredList)
                }}>
                    Filter by ratting
                </button>
            </div>
            <div className="restaurant-container">
                {
                    restaurantList.map((restaurant) => (
                        <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;