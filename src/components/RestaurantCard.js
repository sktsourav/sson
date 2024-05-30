import { CDN_RESTAURANT_LOGO } from "../utils/constants";


const RestaurantCard = (props) => {
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } = props?.restaurant?.info
    const { deliveryTime } = sla
    return (
        <div className="m-4 p-4 w-[250] bg-gray-200 rounded-lg hover:bg-orange-100">
            <div>
                <img src={CDN_RESTAURANT_LOGO + cloudinaryImageId}
                    className="rounded-lg"
                />
            </div>
            <h3 className="py-4 font-bold text-lg">{name}</h3>
            <p>{avgRating} Stars</p>
            <p>{costForTwo}</p>
            <p>{deliveryTime} mins</p>
            <p>{cuisines.join(", ")}</p>
        </div>
    )
}

export default RestaurantCard 