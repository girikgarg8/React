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

const Body = () => {
    return (
        <h4> Body </h4>
    )
}

const Footer = () => {
    return <h4> Footer </h4>
}

const AppLayout = () => {
    return (
        <div>
            <HeaderComponent />
            <Body />
            <Footer />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)
