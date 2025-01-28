import { useEffect, useState } from "react";

const useOnileStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    // check if online
    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });
    }, []);

    return onlineStatus; // boolean value

}

export default useOnileStatus;