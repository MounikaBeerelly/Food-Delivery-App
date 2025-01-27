import { useState } from "react";

const UserComponent = ({name}) => {
    const [count, setCount] = useState(0);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Hyderabad</h3>
            <h4>Contact: @mounika.uid</h4>
        </div>
    )
}

export default UserComponent;