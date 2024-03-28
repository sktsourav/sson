import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchedRestaurantList, setSearchedRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchRestaurants();
    }, [])

    const fetchRestaurants = async () => {
        const data = await fetch(SWIGGY_URL)
        const resList = await data.json();
        setRestaurantList(resList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setSearchedRestaurantList(resList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const search = () => {
        const searchList = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedRestaurantList(searchList)
    }

    return restaurantList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        placeholder="Restaurant Name"
                        onChange={e => setSearchText(e.target.value)} />
                    <button className="searchButton" onClick={search}>
                        Search
                    </button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = searchedRestaurantList.filter(res => res?.info?.avgRating >= 4.4)
                    setSearchedRestaurantList(filteredList)
                }}>
                    Filter by ratting
                </button>
            </div>
            <div className="restaurant-container">
                {
                    searchedRestaurantList.map((restaurant) => (
                        // <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
                        <Link
                            key={restaurant?.info?.id} 
                            className="linkStyle"
                            to={"/restaurant/" + restaurant?.info?.id}
                        >
                            <RestaurantCard restaurant={restaurant} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;