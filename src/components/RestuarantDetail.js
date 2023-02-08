import { useEffect,useState} from "react";
import {useParams} from "react-router-dom" 
import { IMG_CDN_URL } from "../config.js";
import useRestaurant from "../utils/useRestaurant.js";
import Shimmer from "./Shimmer.js";
import useRestaurant from "../utils/useRestaurant.js";
const RestaurantDetail=()=>{
    const params=useParams();
    const {id} =params; //how to read a dynamic URL params
    
    const restaurant=useRestaurant(id)

    return (!restaurant)? <Shimmer/> :(
        <>
            <h1 className="ml-2 font-bold text-3xl"> Welcome to restaurant :{id} </h1>
            <h2 className="ml-2 text-2xl" > {restaurant?.name} </h2>
            <img className="object-center" src={IMG_CDN_URL+restaurant?.cloudinaryImageId} />
            {/* <h3 className="ml-2"> {restaurant?.area} </h3> 
            <h3 className="ml-2"> {restaurant?.avgRating} stars </h3>  
            <h3 className="ml-2"> {restaurant?.costForTwoMsg} </h3>       */}
        <div className="menu"> 
            {console.log(restaurant?.menu?.items)}
                <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                {Object.values(restaurant?.menu?.items).map((item)=>(
                    <li key={item?.id}> {item?.name} </li>
                ))}
            </ul>
        </div>
        </>
    )
}
export default RestaurantDetail;