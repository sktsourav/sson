import { CDN_RESTAURANT_LOGO } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantPage = () => {
    const { resId } = useParams();
    const restaurantData = useRestaurantInfo(resId);

    if (restaurantData === null) return <Shimmer />

    const { name, avgRating, cuisines, costForTwoMessage } = restaurantData?.data?.cards[2]?.card?.card?.info;
    const menuOptions = restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return (
        <div>
            <h1 className="py-4 mx-12 text-6xl text-gray-400">{name}</h1>
            <p className="mx-12 text">{cuisines.join(", ")} - {costForTwoMessage}</p>
            <p className="mx-12 text">Ratting - {avgRating}</p>

            {
                menuOptions?.map((option) => (
                    option?.card?.card?.itemCards ?
                        (
                            <div>
                                <h3><p className="mx-12 mt-8 font-bold text-xl">{option?.card?.card?.title}</p></h3>
                                {option?.card?.card?.itemCards.map(menu => (
                                    <div className="p-2 mx-12 my-4 flex items-center justify-between border shadow-md">
                                        <div className="flex">
                                            <div>
                                                <p className="px-4">{menu?.card?.info?.isVeg === 1 ? "🟢" : "🔴"}</p>
                                            </div>
                                            <div>
                                                <p className="px-4">{menu?.card?.info?.name}</p>
                                                <p className="px-4 text-xs">{menu?.card?.info?.description}</p>
                                            </div>
                                        </div>
                                        <div className=" flex items-center">
                                            <button className="w-32 py-2 bg-orange-400 rounded-lg font-bold">+ ₹ {menu?.card?.info?.price / 100 || menu?.card?.info?.defaultPrice / 100}</button>
                                            {menu?.card?.info?.imageId ? (<img
                                                src={CDN_RESTAURANT_LOGO + menu?.card?.info?.imageId}
                                                alt="No Images"
                                                className="rounded-lg w-[100] h-[100] mx-4"
                                            />) : <div className="rounded-lg w-[100] px-4 mx-4 font-bold border">No Image Found</div>}
                                        </div>


                                    </div>
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