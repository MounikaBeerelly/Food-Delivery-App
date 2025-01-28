import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from './Components/HeaderComponent';
import BodyComponent from "./Components/BodyComponent";
import AboutComponent from "./Components/AboutComponent";
import ContactComponent from "./Components/ContactComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorComponent from "./Components/ErrorComponent";
import RestaurantMenu from "./Components/ReastaurantMenuPage";
import GroceryComponent from "./Components/GroceryComponent";
// import GroceryComponent from "./Components/GroceryComponent";

//lazy loading/ chunking/ dynamic bundling/ on demand loading/ dynamix import
const Grocery = lazy(() => import("./Components/GroceryComponent"));

const AppLayoutComponent = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <Outlet />
        </div>
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
        ],
        errorElement: <ErrorComponent />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);