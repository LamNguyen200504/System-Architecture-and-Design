// Return users object based on page number being displayed

import { useState, useEffect } from "react";
import getNextUsers from "./LazyUserGridApiCall";

function useLazyUserGridEventHandler({page, pageSize}) {

    const [users, setUsers] = useState([]); // use an array to store user objects as state

    useEffect(() => {
        const newUsers = getNextUsers(page, pageSize);

        if (page === 0) { // check if it's the initial load
            setUsers(newUsers);
        } else {
            // if not the first load, concatenate using spread operator (...)
            setUsers(currentUsers => [...currentUsers, ...newUsers]);
        }
    }, [page]) // dependency array [page], meaning the useEffect reruns whenever the page changes

    return {users};
}

export default useLazyUserGridEventHandler;