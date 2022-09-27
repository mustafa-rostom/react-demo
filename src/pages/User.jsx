import { useContext,useState,useEffect } from 'react'
import  User  from '../components/User'
import { useParams } from 'react-router-dom'
import{ UserContext } from '../modules/UsersModule'


const UserPage = () => {
    const[user,setUser]=useState({})
    const {id}=useParams();
    const {users}= useContext(UserContext)

    useEffect(() => {
    if (users?.length) {
        setUser(users.find((u) => u.id === +id));
    }
    }, [id, users]);

    console.log(user);
    return (
        <User {...user} />
    );
};

export default UserPage; 