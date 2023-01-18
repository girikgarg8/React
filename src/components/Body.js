 import { restaurantListSwiggy } from "../config.js";
import { RestaurantCard } from "./RestaurantCard.js";
import {useState} from "react";

function filterData(searchText,restaurants){
    const filterData=restaurants.filter((restaurant)=>
    restaurant.data.name.includes(searchText)
    );
    return filterData
}
const Body = () => {
  // const searchTxt="KFC"
  //searchText is a local state variable
  const [searchText,setSearchInput]=useState("") //to create state varibable
  // const [searchClicked,setSearchClicked]=useState("false")
  console.log("render()")
  const [restaurants,setRestaurants]=useState(restaurantListSwiggy)
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
        restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        })
      }
    </div>
    </>
  )
}
export default Body;