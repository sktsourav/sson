import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

    const onlineStatus = useOnlineStatus();
    if (!onlineStatus) return ("No internet connection. Please check your internet connection")

    return restaurantList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex p-4 mx-12">
                <div className="p-4">
                    <input
                        type="text"
                        className="border border-solid border-black"
                        value={searchText}
                        placeholder="Restaurant Name"
                        onChange={e => setSearchText(e.target.value)} />
                    <button className="px-4 py-2 bg-orange-100 m-4 rounded-md" onClick={search}>
                        Search
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-orange-100 rounded-md" onClick={() => {
                        const filteredList = searchedRestaurantList.filter(res => res?.info?.avgRating >= 4.4)
                        setSearchedRestaurantList(filteredList)
                    }}>
                        Filter by ratting
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap mx-12">
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