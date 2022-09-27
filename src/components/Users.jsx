import { useContext } from "react";
import{ UserContext } from '../App'
import User from './User'

const Users = () => {
    const { users,incrementUserAge,usersAboveThirty,toggle,isEnabled }=useContext(UserContext)
    return (
    <> 
        <div>
        {users?users.map((user) => (
            <User key={user.id} {...user} onIncrement={incrementUserAge} />
        )):<div>Loadinggggg ........</div>}
        </div>
        <div>Total Number of users that have more than 30 years is {usersAboveThirty}</div>
        <button onClick={toggle}>{isEnabled? 'Disable':'Enable'}</button>
        {/* condtional rendering */}
        {isEnabled && <div>Enabled</div>} 
        
    </>
    );
};

export default Users;