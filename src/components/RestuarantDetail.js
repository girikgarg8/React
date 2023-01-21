import { useEffect,useState} from "react";
import {useParams} from "react-router-dom" 
const RestaurantDetail=()=>{
    const params=useParams();
    const {id} =params; //how to read a dynamic URL params

    const [restaurant,setRestaurant]=useState({})
    useEffect(()=>{
        getRestaurantsInfo();
    },[]);
    async function getRestaurantsInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=30.3355531&lng=76.3849589&menuId=89605")
        const json=await data.json()
        setRestaurant(json.data)
    }
    return (
        <>
        <h1> Welcome to restaurant :{id} </h1>
        <h2> {restaurant.name} </h2>
        </>
    )
}
export default RestaurantDetail;