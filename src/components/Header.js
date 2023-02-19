import { useState, useContext } from "react";
import Logo from "../../assets/img/logo.png"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux" //useSelector is acting as bridge between the store and the UI layer, so it's imported from it's imported from "react-redux"
import userContext from "../utils/UserContext";
const loginUser = () => {
    //API call to check authentication
    return false; //hardcoding for now
}
export const Title = () => { //omitting the return statement here, this is also valid syntax
    return <a href="/" ><img data-testid="logo" className="h-28 p-2" src={Logo} alt="logo" />  </a>
}
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { person } = useContext(userContext)

    const cartItems = useSelector(store => store.cart.items)
    //     This is a hook in React that uses the useSelector hook from the react-redux library.

    // The useSelector hook is a way to access data from a Redux store in a React component.The hook takes a selector function as an argument and returns the value returned by the selector.The selector is a function that takes the entire store state as an argument and returns a specific piece of state that the component needs.

    // In this case, the selector function is store => store.cart.items, which retrieves the items property of the cart property from the store.The value returned by the selector is stored in the cartItems constant.

    // The hook is used to keep the component updated with the latest state from the store.When the store state changes, the hook will call the selector function and re - render the component if the value
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50">
            <Title />
            <div className="nav-items">
                <ul className="flex py-10">
                    <li className="px-26"> <Link to="/"> Home </Link>  </li>
                    <li className="px-32"> <Link to="/about"> About </Link> </li>
                    <li className="px-32">  <Link to="/contact"> Contact </Link> </li>
                    <li className="px-32"> <Link to="/instamart"> Instamart </Link></li>
                    <li className="px-32"> <Link to="/cart" data-testid="cart"> Cart - {cartItems.length}  </Link> </li>
                </ul>
                {
                    (isLoggedIn) ? <button onClick={() => setIsLoggedIn(false)} className="mx-60 px-56"> Logout {person.name}</button> :
                        <button className="mx-60 px-56" onClick={() => setIsLoggedIn(true)}> Login </button>
                }
            </div>
        </div >
    );
}
export default Header;