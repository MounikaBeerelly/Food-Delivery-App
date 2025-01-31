import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from './Components/HeaderComponent';
import BodyComponent from "./Components/BodyComponent";
import AboutComponent from "./Components/AboutComponent";
import ContactComponent from "./Components/ContactComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorComponent from "./Components/ErrorComponent";
import RestaurantMenu from "./Components/ReastaurantMenuPage";
import GroceryComponent from "./Components/GroceryComponent";
import UserContext from "./utils/userContext";
// import GroceryComponent from "./Components/GroceryComponent";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
import CartComponent from "./Components/CartComponent";

//lazy loading/ chunking/ dynamic bundling/ on demand loading/ dynamix import
const Grocery = lazy(() => import("./Components/GroceryComponent"));

const AppLayoutComponent = () => {

    const [userName, setUserName] = useState();

    // authentication
    useEffect(() => {
        // make an api call and send username and password
        const data = {
            name: "Mounika Beerelly",
        };
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
           <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
              <div className="app">
                 <HeaderComponent />
                 <Outlet />
              </div>
            </UserContext.Provider>
        </Provider>
    )
};

// Routes
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayoutComponent />,
        children: [
            {
                path: "/",
                element: <BodyComponent />,
            },
            {
                path: "/about",
                element: <AboutComponent />,
            },
            {
                path: "/contact",
                element: <ContactComponent />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}>
                             <GroceryComponent />
                         </Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <CartComponent />
            },
        ],
        errorElement: <ErrorComponent />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);