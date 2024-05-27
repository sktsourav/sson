import { useEffect, useState } from "react";
import { GET_MENU_URL } from "./constants";

const useRestaurantInfo = (resId) => {
    const [resData, setResData] = useState(null)
    const fetchRestaurantData = async() => {
        const data = await fetch(GET_MENU_URL + resId);
        const json = await data.json();
        setResData(json)
    }
    useEffect(() => {
        fetchRestaurantData()
    }, [])
    return resData;
}

export default useRestaurantInfo;