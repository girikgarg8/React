import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)
    return (
        <div>
            <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length} </h1>
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