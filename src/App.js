import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from './Components/HeaderComponent';
import BodyComponent from "./Components/BodyComponent";
import AboutComponent from "./Components/AboutComponent";
import ContactComponent from "./Components/ContactComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorComponent from "./Components/ErrorComponent";

const AppLayoutComponent = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <BodyComponent />
        </div>
    )
};

// Routes
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayoutComponent />,
        errorElement: <ErrorComponent />
    },
    {
        path: "/about",
        element: <AboutComponent />,
    },
    {
        path: "/contact",
        element: <ContactComponent />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);