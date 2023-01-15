/* Header
            -Logo(Title)
            -Nav Items (Right Side)
            -Cart
            Body
            -Search bar
            -Restaurant List
            - Restaurant Card (many cards)
            - Image
            - Name
            - Rating
            - Cuisines
        Footer
            -links
            -copyright
        */
import React from "react"; //getting from node modules
import ReactDOM from "react-dom/client";
//Default Import
// import Header from "./components/Header" 
//Named import
import Header from "./components/Header"
import Body from "./components/Body.js"
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./config.js";
import { RestaurantCard } from "./components/RestaurantCard";

const heading = (
  <h1> Namaste React </h1>
)

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root")) 
root.render(<AppLayout />) // passing a react element inside the root
