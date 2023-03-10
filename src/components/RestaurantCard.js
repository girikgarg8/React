import {useContext} from "react"
import userContext from "../utils/UserContext.js"
import { IMG_CDN_URL } from "../config.js"
export const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString}) => {
    const {person}=useContext(userContext)
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-xl"> {name} </h2>
            <h3> {cuisines.join(", ")} </h3>
            <h4> {lastMileTravelString} </h4>
            {/* <h5> {person?.email} </h5> */}
        </div>
    )
}