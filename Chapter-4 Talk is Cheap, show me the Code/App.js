import React from "react";
import ReactDOM from "react-dom/client";

const Title=()=>{
    return (
        <h1 id="title" key="h2">
            Food Villa
        </h1>
    )
};

const HeaderComponent = () => {
    return (
        <div>
            <Title />
            <h2> Namaste React functional component </h2>
            <h1> This is a h1 tag </h1>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />)
