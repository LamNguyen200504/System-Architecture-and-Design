// LazyLoadTable UI component holds the User Grid 
// and the "Load More" button at the end

import React, { Suspense } from "react";
import useLazyLoadEventHandler from "./LazyLoadUserEventHandler";
import { getMaxPage } from "./child_component/LazyUserGridApiCall";

const LazyUserGrid = React.lazy(() => import('./child_component/LazyUserGrid'));

const LazyLoadTable = () => {
    const { page, usersPerPage, loadMoreUsers } = useLazyLoadEventHandler();

    const maxPage = getMaxPage(usersPerPage);
    
    return (
        <div>
            {/* Fall back UI loading */}
            <Suspense>
                <LazyUserGrid page={page} pageSize={usersPerPage}></LazyUserGrid>
            </Suspense>

            {/* "Load more" button is condintionally rendered */}
            {page < maxPage - 1 && (
                <button className="w-full mx-auto
                                    bg-blue-500 hover:bg-blue-700
                                    text-white font-bold
                                    py-2 px-4 rounded"
                        onClick={loadMoreUsers}>

                    Load More

                </button>
            )}
        </div>
    )
}

export default LazyLoadTable;