import MenuBody from "./RestaurantMenuBody"

const MenuHead = ({ data }) => {
    console.log("props", data)
    return (
        <div className="w-6/12  m-auto bg-gray-50 shadow-md my-8 p-4 ">
            <div className="font-bold flex justify-between mb-8">
                <span>{data.title} ({data.itemCards.length})</span>
                <span>⬇</span>
            </div>
            <MenuBody data={data.itemCards} />
        </div>
    )
}

export default MenuHead