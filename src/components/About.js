import {Outlet} from "react-router-dom"
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile"
import React from "react"
const About=()=>{
    return (
        <div> 
            <h1> About Us Page </h1>   
            <p> This is the Namaste React Live course chapter-7 </p> 
            <Profile name={"Girik class"}/>
            <ProfileFunctionalComponent name={"GirikClass"}/>
        </div>
    )
}
export default About;