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
import React,{lazy,Suspense,useState} from "react"; //getting from node modules
import userContext from "./utils/UserContext";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body.js"
import Shimmer from "./components/Shimmer";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./config.js";
import { RestaurantCard } from "./components/RestaurantCard";
import About from "./components/About"
import Profile from "./components/Profile";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter,RouterProvider,Link,Outlet} from "react-router-dom";
import RestaurantDetail from "./components/RestuarantDetail";
import {Provider} from "react-redux";
import store from "./utils/store";

// const [user,setUser]=useState({
//   name: "Girik Garg",
//   email: "girikgarg8@gmail.com"
// })
const heading = (
  <h1> Namaste React </h1>
)

const Instamart=lazy(()=>
  import ("./components/Instamart")
);

const AppLayout = () => {
  const [person,setPerson]=useState({
    name: "Akshay Sir rocks!!",
    email: "akshaymarch7@gmail.com"
  }) //overriding the default value defined in the UserContext.js file, for making dynamic user name, like for girik, girtik should be displayed and for nikhil "Weclome nikhil" should be displayed
  return (
    // <userContext.Provider value={{ //UserContext.Provider is wrapping all three components Header,Outlet and Footer because I want the value from React Context to e available to all three compnents, if any one compnent is not inside userContext.provider, I will not be able to use the new value of userContext inside that component
    //   person:person,
    //   setPerson:setPerson
    // }}>

      <Provider store={store}> {/* Passing props to the Provider componention */}
      <Header />
      <Outlet/>
      <Footer />
      </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>,
    children:[ //array of objects
      {
      path: "/about",
      element: <About />,
      children: [
        {
          path: "profile",
          element: <Profile />
        }
      ]
      },
      {
        path: "/instamart",
        element: (
            <Suspense fallback="Shimmer">
            <Instamart/>
            </Suspense>
        )
      },
      {
        path:"/",
        element: <Body/>
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