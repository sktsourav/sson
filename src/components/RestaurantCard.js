import { CDN_RESTAURANT_LOGO } from "../utils/constants";


const RestaurantCard = (props) => {
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } = props?.restaurant?.info
    const { deliveryTime } = sla
    return (
        <div className="m-4 p-4 w-[250] h-[520] bg-orange-100 rounded-lg hover:bg-orange-200">
            <div>
                <img src={CDN_RESTAURANT_LOGO + cloudinaryImageId}
                    className="rounded-lg h-72 w-60"
                />
            </div>
            <p className="py-4 font-bold text-lg">{name}</p>
            <p className="text-sm text-gray-700">{avgRating} Stars</p>
            <p className="text-sm text-gray-700">{costForTwo}</p>
            <p className="text-sm text-gray-700">{deliveryTime} mins</p>
            <p className="text-sm text-gray-700">{cuisines.join(", ")}</p>
        </div>
    )
}

export default RestaurantCard 