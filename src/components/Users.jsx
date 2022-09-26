import React, { useEffect } from 'react';
import User from './User'
import { useState,useMemo } from 'react';
import axios from 'axios'
import { v4 as uuid } from "uuid";
import  useToggle  from '../hooks/useToggle'

const Users = () => {
    const [isEnabled,toggle]=useToggle(true)

    const [users,setUsers] = useState(); 
    const incrementUserAge=(userId)=>{
        // const newuser ={id:uuid(),name:'steven',age:19};
        // const currentUsers=[...users];
        // currentUsers.push(newuser);
        // setUsers(currentUsers);
        // console.log(users)
        setUsers(currentUsers=>currentUsers.map(user=>user.id===userId? {...user,age:user.age+1}:user))
    
    }
    const addUser=(user)=>{
        localStorage.setItem('user',JSON.stringify(user))
        setUsers(currentUsers=> ([...currentUsers,{...user,age:+user.age,id:uuid()}]))
    }

    // const usersAboveThirty = users.filter(user=>{
    //     console.log('RECALCULATION');
    // return user.age > 30;
    // }).length

    // useMemo hook
    const usersAboveThirty=useMemo(()=>{
        return users?.filter(user=>{
        console.log('RECALCULATION');
        return user.age > 30;
    }).length
    },[users]);
    // useEffect to cleanup when the component unamount 
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            setUsers(response.data)
            console.log(response.data );
        });
        return()=> {
            localStorage.removeItem('user')
        }
    },[])

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