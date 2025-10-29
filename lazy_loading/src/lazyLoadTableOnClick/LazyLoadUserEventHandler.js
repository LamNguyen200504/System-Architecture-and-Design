// Page number manipulation

import { useState } from "react";

function useLazyLoadEventHandler() {
    const [page, setPage] = useState(0);
    const [usersPerPage] = useState(5);

    const loadMoreUsers = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return {
        page,
        usersPerPage,
        loadMoreUsers
    };
}

export default useLazyLoadEventHandler;