import { useState } from "react";
import MenuBody from "./RestaurantMenuBody"

const MenuHead = ({ data, shownIndex, toggles }) => {
    console.log("props", data)
    const toggleAccordian = () => {
        toggles()
    }
    return (
        <div className="w-6/12  m-auto bg-gray-50 shadow-md my-8 p-4 position: relative">
            <div className="font-bold flex justify-between cursor-pointer" onClick={toggleAccordian}>
                <span>{data.title} ({data.itemCards.length})</span>
                {shownIndex ? <span>⏫</span> : <span>⏬</span>}
            </div>
            {shownIndex ? <MenuBody data={data.itemCards} /> : ""}
        </div>
    )
}

export default MenuHead