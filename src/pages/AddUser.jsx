import {useContext} from 'react';
import {UserContext} from '../App.js'
import AddNewUser from "../components/AddNewUser";

const AddUserPage = () => {
    const { addUser,isEnabled }=useContext(UserContext)
    return (
        <AddNewUser addUser={addUser} isEnabled={isEnabled} />
    );
};

export default AddUserPage;