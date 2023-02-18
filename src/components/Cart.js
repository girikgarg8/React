import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import {clearCart} from "../utils/cartSlice"
import FoodItem from "./FoodItem";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    console.log(cartItems)
    return (
        <div>
            <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length} </h1>

            <button className="bg-green-100 p-2 m-5" onClick={() => handleClearCart()}> Clear Cart </button>

            {/* <FoodItem {...cartItems[0]} /> */}
            <div className="flex">
                {
                    cartItems.map((item) => (
                        <FoodItem key={item.id} {...item} ></FoodItem>
                    ))
                }
            </div>
        </div>
    )
}
export default Cart;