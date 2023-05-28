import React from "react";
import ReactDOM from "react-dom/client";

const heading2 = React.createElement("h1", {
    id: "First heading",
    key: "h1"
}, "Hello, first heading");
const heading3 = React.createElement("h1", {
    id: "Second heading",
    key: "h2"
}, "Hello, second heading from React");

const container = React.createElement("div", {
    id: "container"
}, [heading2, heading3]) //In React, to pass children we use an array of elements

const heading1 = React.createElement("h1", {
    id: "title", //in terms of HTML, it is a tag attribute,in terms of React it is called props, just see in console on the browser
    className: "example"
}, "Namaste Everyone from React!!");

const newHeading= <h1 id="title" key="h1"> Bonjour from JSX!! </h1>

//console.log(heading1); //A React element is nothing but a javascript object, at the end of the day
const root = ReactDOM.createRoot(document.getElementById("root")); //Try changing it to document.getElementById("root1"), see the 
//root.render(heading1); //placing the heading1 inside the root
//React will override any other tags place inside the root

const Title=()=>{
    return <h1> Namaste React Title page </h1>
}

const footer=React.createElement("h1",{},"Hello, from footer");

const HeaderComponent=()=>{
    return (
        <div>
            <Title />
            <h2> Namaste React functional component </h2>
            <h1> This is a h1 tag </h1>
            {footer}
            {console.log("Yess, you are in the browser's console ")}
        </div>
    )
}


root.render(<HeaderComponent/>)
//root.render(HeaderComponent())==> This too works