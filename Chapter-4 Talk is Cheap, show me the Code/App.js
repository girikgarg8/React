import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return (
        <img className="logo" alt="logo" src="https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/302275887_487537640050648_5998956273504369200_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zEongH8XhvMAX-Lsjo-&_nc_ht=scontent-bom1-2.xx&oh=00_AfB4Tm_foVThFwRKSZllZiPKINkWie0hGcyJdywE5cRjEQ&oe=6478A4AE"></img>
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

const Body=()=>{
    return (
        <h4> Body </h4>
    )
}

const Footer=()=>{
    return <h4> Footer </h4>
}

const AppLayout=()=>{
    return (
        <div>
        <HeaderComponent/>
        <Body/>
        <Footer/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />)
