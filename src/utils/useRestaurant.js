import {useState,useEffect} from "react"
import {FETCH_MENU_URL} from "../config"
const useRestaurant=(resId)=>{
    const [restaurant,setRestaurant]=useState(null)
    //get data from API
    useEffect(() => {
        getRestaurantsInfo();
    }, []);
    async function getRestaurantsInfo() {
        const data = await fetch(FETCH_MENU_URL + resId)
        const json = await data.json()
        setRestaurant(json.data)
    }
    //return restauarant data
    return restaurant;
}
export default useRestaurant