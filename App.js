import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
    return (
        <h1>Header Component</h1>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);