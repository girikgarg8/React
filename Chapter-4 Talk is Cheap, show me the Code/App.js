import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return (
        <img className="logo" alt="logo" src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"></img>
    )
};

const HeaderComponent = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li> Home </li>
                    <li> About </li>
                    <li> Contact </li>
                    <li> Cart </li>
                </ul>
            </div>
        </div>
    )
}


const Footer = () => {
    return <h4> Footer </h4>
}

const DummyRestauarantCard = () => {
    return (
        <div className="card">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf"></img>
            <h2> Burger King </h2>
            <h3> Burgers,American </h3>
            <h4> 4.2 stars </h4>
        </div>
    )
}

const burgerKing={
    name: "Burger King",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    rating: "4.2",
    cuisines: ["Burgers","American"]
}
const DummyRestauarantCardFromObj=()=>{
    return (
        <div className="card">
             <img src={burgerKing.image}></img>
             <h2> {burgerKing.name} </h2>
             <h3> {burgerKing.cuisines.join( ",")} </h3>
             <h4> {burgerKing.rating} stars </h4>
        </div>
    )
}

const Body=()=>{
    return (
        <div className="restaurant-list">
            <DummyRestauarantCardFromObj />
            <DummyRestauarantCardFromObj />
            <DummyRestauarantCardFromObj />
            <DummyRestauarantCardFromObj />
            <DummyRestauarantCardFromObj />
            <DummyRestauarantCardFromObj />
            <DummyRestauarantCardFromObj />
            <DummyRestauarantCardFromObj />
            <DummyRestauarantCardFromObj />
            <DummyRestauarantCardFromObj />
            <DummyRestauarantCardFromObj />
            <DummyRestauarantCardFromObj />
            <DummyRestauarantCardFromObj />
        </div>
    )
}
const AppLayout = () => {
    return (
        <div>
            <HeaderComponent />
            <Body/>
            <Footer />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)
