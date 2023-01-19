 import { restaurantListSwiggy } from "../config.js";
import { RestaurantCard } from "./RestaurantCard.js";
import {useState,useEffect} from "react";

function filterData(searchText,restaurants){
    const filterData=restaurants.filter((restaurant)=>
    restaurant.data.name.includes(searchText)
    );
    return filterData
}
const Body = () => {

  const [searchText,setSearchInput]=useState("") //to create state varibable
  const [restaurants,setRestaurants]=useState([])
  useEffect(() => {
    getRestaurants();
  }, [searchText]);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7335152&lng=76.7826359&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json();
    //optional chaining
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }
  return (
    <>
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e)=>
        {setSearchInput(e.target.value)} 
       } ></input>
      <button className="search-btn" onClick={()=>{
        //need to filter the data
        const data=filterData(searchText,restaurants);
        //update the state-restaurants
        setRestaurants(data)
      }} > Search </button>
    </div>
    <div className="restaurant-list">
      {
        restaurants?.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        })
      }
    </div>
    </>
  )
}
export default Body;