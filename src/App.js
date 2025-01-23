import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from './Components/HeaderComponent';
import BodyComponent from "./Components/BodyComponent";

const AppLayoutComponent = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <BodyComponent />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);