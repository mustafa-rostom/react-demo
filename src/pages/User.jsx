import  User  from '../components/User'
import { useParams } from 'react-router-dom'
const UserPage = () => {
    const {id}=useParams();
    console.log(id);
    return (
        <User id={+id} name='mustafa' age={25} />
    );
};

export default UserPage;