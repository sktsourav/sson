import { useState } from "react";
import MenuBody from "./RestaurantMenuBody"

const MenuHead = ({ data }) => {
    console.log("props", data)
    const [open, setOpen] = useState(false)
    const toggleAccordian = () => {
        setOpen(!open)
    }
    return (
        <div className="w-6/12  m-auto bg-gray-50 shadow-md my-8 p-4 ">
            <div className="font-bold flex justify-between cursor-pointer" onClick={toggleAccordian}>
                <span>{data.title} ({data.itemCards.length})</span>
                {open ? <span>⏫</span> : <span>⏬</span>}
            </div>
            {open ? <MenuBody data={data.itemCards} /> : ""}
        </div>
    )
}

export default MenuHead