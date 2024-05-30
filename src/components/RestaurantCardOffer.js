import RestaurantCard from "./RestaurantCard"

const RestaurantCardOffer = (RestaurantCards) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCardOffer