import { configureStore } from "@reduxjs/toolkit"; //this file is related to the Redux store
import cartSlice from "./cartSlice";

const store = configureStore({ //this store will contain the slices
    reducer: {
        cart: cartSlice
    }
})
export default store;