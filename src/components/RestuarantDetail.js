import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../config.js";
import useRestaurant from "../utils/useRestaurant.js";
import Shimmer from "./Shimmer.js";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux"; //useDispatch is a hook in React that is used to dispatch actions to a Redux store. It is provided by the react-redux library.
const RestaurantDetail = () => {
    const params = useParams();
    const { id } = params; //how to read a dynamic URL params
    const restaurant = useRestaurant(id)


    const dispatch=useDispatch();
    // const handleAddItem = () => {
    //     dispatch(addItem("Grapes")) //remeber that when I clcikc on add, it should dispatch an action, so that dispactching of action is done using dispatchEvent function, this "grapes" that I am passing here is actually the action's payload, which I have used in cartSlice.js file, behing the scenes an object called action would be getting created, something like action={payload:"Grapes"}
    // }

    const addFoodItem=(item)=>{
        dispatch(addItem(item))
    }
    return (!restaurant) ? <Shimmer /> : (
        <div className="flex">
            <div>
            <h1 > Restaurant ID :{id} </h1>
            <h2 > {restaurant?.name} </h2>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
            {/* <h3 className="ml-2"> {restaurant?.area} </h3> 
            <h3 className="ml-2"> {restaurant?.avgRating} stars </h3>  
            <h3 className="ml-2"> {restaurant?.costForTwoMsg} </h3>       */}
            </div>
            {/* <div>
                <button onClick={() => handleAddItem()} className="p-2 m-5 bg-green-100"> Add Item </button>
            </div> this was just a dummy add item button which I used for demonstartion purposde*/}
            <div className="p-5">
                {/* console.log(restaurant?.menu?.items) */}
                <h1> Menu </h1>
                <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400" data-testid="menu">
                    {Object.values(restaurant?.menu?.items).map((item) => (
                        <li key={item?.id}> {item?.name} - <button className="p-1 bg-green-50" onClick={()=>addFoodItem(item)} data-testid="addBtn" > Add item </button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default RestaurantDetail;