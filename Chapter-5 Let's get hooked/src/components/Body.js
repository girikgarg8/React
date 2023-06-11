import {restaurantList} from "../constants"
import DummyRestauarantCardFromObj from "./RestaurantCard"

const Body = () => {
    return (
        <>
        <input type="text" placeholder="Search"></input>
        <button> Submit</button>
        <div className="restaurant-list">
            {
                restaurantList.map((restaurant, ind) => {
                    return <DummyRestauarantCardFromObj {...restaurant.data} key={restaurant.data.id} /> //return statement is needed so that the output array of map function returns restaurant cards, this is a Javascript thing, not a React thing!
                })
            }
        </div>
        </>
    )
}

export default Body;