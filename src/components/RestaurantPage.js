import { CDN_RESTAURANT_LOGO } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import MenuHead from "./RestaurantMenuHead";
import { useState } from "react";

const RestaurantPage = () => {
    const { resId } = useParams();
    const restaurantData = useRestaurantInfo(resId);
    const [modern, setModern] = useState(true)
    const [modernText, setModernText] = useState("NEW")

    const changeTheme = () => {
        setModern(!modern)
        if (modern) {
            setModernText("OLD")
        } else {
            setModernText("NEW")
        }
    }

    const [showIndex, setIndex] = useState(null)

    if (restaurantData === null) return <Shimmer />

    const { name, avgRating, cuisines, costForTwoMessage } = restaurantData?.data?.cards[2]?.card?.card?.info;
    const menuOptions = restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const menuCategories = menuOptions.filter(item => item?.card?.card?.itemCards?.length > 0)
    { console.log("menuCategories", menuCategories) };



    return (
        <div className="text-center">
            <div className="w-6/12 m-auto flex justify-between py-4">
                <div className="">
                    <h1 className="py-4 text-6xl text-gray-400 text-left">{name}</h1>
                    <p className="text-left">{cuisines.join(", ")} - {costForTwoMessage}</p>
                    <p className="text-left">Ratting - {avgRating}</p>
                </div>
                <label class="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" class="sr-only peer" />
                    <div onClick={changeTheme} class="relative w-14 h-7 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{modernText}</span>
                </label>
            </div>


            {modern == true ? (
                <>
                    {menuCategories.map((category, index) => (
                        <MenuHead
                            key={category?.card?.card?.title}
                            data={category.card.card}
                            showIndex={showIndex === index ? true : false}
                            toggles={() => setIndex(index)}
                        />
                    ))}
                </>) :
                <>
                    {
                        menuOptions?.map((option) => (
                            option?.card?.card?.itemCards ?
                                (
                                    <div key={option?.card?.card?.title}>
                                        <h3><p className="mx-12 mt-8 font-bold text-xl">{option?.card?.card?.title}</p></h3>
                                        {option?.card?.card?.itemCards.map(menu => (
                                            <div key={menu?.card?.info?.id} className="p-2 mx-12 my-4 flex items-center justify-between border shadow-md">
                                                <div className="flex">
                                                    <div>
                                                        <p className="px-4">{menu?.card?.info?.isVeg === 1 ? "🟢" : "🔴"}</p>
                                                    </div>
                                                    <div>
                                                        <p className="px-4">{menu?.card?.info?.name} </p>
                                                        <p className="px-4 text-xs text-gray-500">{menu?.card?.info?.description}</p>
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
                    }</>
            }
        </div>
    )
}

export default RestaurantPage;