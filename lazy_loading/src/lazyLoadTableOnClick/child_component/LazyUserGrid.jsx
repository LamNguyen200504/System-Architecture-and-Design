// LazyUserGrid holds the users array 
// for rendering UserCard on the Grid of the current page

import UserCard from "./UserCard"
import useLazyUserGridEventHandler from "./LazyUserGridEventHandler"

const LazyUserGrid = ({page, pageSize}) => {
    
    // get users object from handler
    const {users} = useLazyUserGridEventHandler({page, pageSize})

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2x1 font-bold mb-4">User Grid</h1>

            {users.map((user, key) => (
                <UserCard key={key} user={user}></UserCard>
            ))}

        </div>
    )
}

export default LazyUserGrid;