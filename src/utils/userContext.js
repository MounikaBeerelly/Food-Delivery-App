import { createContext } from "react";

// context api functionality
const UserContext = createContext({
    loggedInUser : "Default User",
});

export default UserContext;