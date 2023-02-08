import { useState,useContext} from "react";
import { Link } from "react-router-dom"
import userContext from "../utils/UserContext";
const loginUser = () => {
    //API call to check authentication
    return false; //harcoding for now
}
export const Title = () => { //omitting the return statement here, this is also valid syntax
    return <a href="/" ><img className="h-28 p-2" src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" alt="logo" />  </a>
}
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const {user}=useContext(userContext)
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50">
            <Title />
            <div className="nav-items">
                <ul className="flex py-10">
                    <li className="px-26"> <Link to="/"> Home </Link>  </li>
                    <li className="px-32"> <Link to="/about"> About </Link> </li>
                    <li className="px-32">  <Link to="/contact"> Contact </Link> </li>
                    <li className="px-32"> Cart </li>
                    <li className="px-32"> <Link to="/instamart"> Instamart </Link></li>
                </ul>
            {
                    (isLoggedIn) ? <button onClick={() => setIsLoggedIn(false)} className="mx-60 px-56"> Logout {user.name}</button> :
                        <button className="mx-60 px-56" onClick={() => setIsLoggedIn(true)}> Login </button>
            }
            </div>
        </div>
    );
}
export default Header;