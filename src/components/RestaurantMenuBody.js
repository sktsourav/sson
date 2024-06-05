import { CDN_RESTAURANT_LOGO } from "../utils/constants";

const MenuBody = ({ data }) => {
    console.log("items", data);
    return (
        <div>
            {
                data.map(item => (
                    <div key={item?.card?.info?.id} className="p-2 m-2 flex justify-between border-b-2 border-gray-200">
                        <div className="text-left w-9/12">
                            <div>
                                <span>{item?.card?.info?.isVeg == 1 ? "🟢" : "🔴"} </span>
                            </div>
                            <div className="flex">
                                <span>{item?.card?.info?.name} </span>
                                <span>₹ {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                            </div>
                            <div>
                                <span className="text-xs text-gray-500">{item?.card?.info?.description}</span>
                            </div>
                        </div>
                        <div>
                            {item?.card?.info?.imageId ? (<img
                                src={CDN_RESTAURANT_LOGO + item?.card?.info?.imageId}
                                alt="No Images"
                                className="rounded-lg w-[100] h-[100] mx-4"
                            />) : <div className="rounded-lg w-[100] px-4 mx-4 font-bold border">No Image Found</div>}
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default MenuBody