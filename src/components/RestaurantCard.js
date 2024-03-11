import { CDN_RESTAURANT_LOGO } from "../utils/constants";


const RestaurantCard = (props) => {
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } = props?.restaurant?.info
    const { deliveryTime } = sla
    return (
        <div className="restaurant-card">
            <div>
                <img src={CDN_RESTAURANT_LOGO + cloudinaryImageId}
                    className="restaurant-logo"
                />
            </div>
            <p style={{ fontSize: "18px", fontWeight: "500" }}>{name}</p>
            <p>{avgRating} Stars</p>
            <p>{costForTwo}</p>
            <p>{deliveryTime} mins</p>
            <p>{cuisines.join(", ")}</p>
        </div>
    )
}

export default RestaurantCard 