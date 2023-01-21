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
import About from "./components/About"
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter,RouterProvider,Link,Outlet} from "react-router-dom";
import RestaurantDetail from "./components/RestuarantDetail";
const heading = (
  <h1> Namaste React </h1>
)

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet/>
      <Footer />
    </React.Fragment>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path:"/restaurant/:id",
        element: <RestaurantDetail/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root")) 
root.render(<RouterProvider router={appRouter} />) // passing a react element inside the root

