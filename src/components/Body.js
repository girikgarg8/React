 import { restaurantListSwiggy } from "../config.js";
import { RestaurantCard } from "./RestaurantCard.js";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer.js";
import { createBrowserRouter,Link} from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useOnline from "../utils/useOnline.js"

const Body = () => {
  const [allRestaurants,setAllRestaurants]=useState([])
  const [searchText,setSearchInput]=useState("") //to create state varibable
  const [filteredRestaurants,setFilteredRestaurants]=useState([])
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7335152&lng=76.7826359&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json();
    //optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards) //for first time I need to fit my filteredRestaurants with all the data from API because otherwise it is empty
  }

  const isOnline=useOnline();
  if (!isOnline){
    return <h1> Offline,please check your internet connection!! </h1>
  }
  if (!allRestaurants) return null; //not render component, early return 


  const searchBtnCSS={
    backgroundColor:"red"
  }
  // if (filteredRestaurants.length==0) return <h1> No restaurants match your filter!! </h1>
  return (allRestaurants?.length===0)? <Shimmer/>:(
    <>
    <div className="search-container p-5 bg-pink-50 my-5">
      <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e)=>
        {setSearchInput(e.target.value)} 
       } ></input>
        <button className="p-2 m-2 bg-purple-900 text-white rounded-md hover:bg-sky-700" onClick={()=>{
        //need to filter the data
        const data=filterData(searchText,allRestaurants);
        //update the state-restaurants
        setFilteredRestaurants(data)
      }} > Search </button>
    </div>
    <div className="flex flex-wrap">
      {
        /* Write logic for no restaurant found */
        filteredRestaurants?.map((restaurant) => {
          return <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}> <RestaurantCard {...restaurant.data} key={restaurant.data.id} /> </Link>
        })
      }
    </div>
    </>
  )
}
export default Body;