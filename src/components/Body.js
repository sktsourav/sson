import RestaurantsList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                {
                    RestaurantsList.map((restaurant) => (
                        <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;