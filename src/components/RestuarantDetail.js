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
        <h1> Welcome to restaurant :{id} </h1>
        <h2> {restaurant?.name} </h2>
        <img src={IMG_CDN_URL+restaurant?.cloudinaryImageId} />
        <h3> {restaurant?.area} </h3> 
        <h3> {restaurant?.avgRating} stars </h3>  
        <h3> {restaurant?.costForTwoMsg} </h3>      
        <div class="menu"> 
            {console.log(restaurant?.menu?.items)}
            <ul>
                {Object.values(restaurant?.menu?.items).map((item)=>(
                    <li key={item?.id}> {item?.name} </li>
                ))}
            </ul>
        </div>
        </>
    )
}
export default RestaurantDetail;