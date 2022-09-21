import React from 'react';
import User from './User'
import { useState,useMemo } from 'react';
import { v4 as uuid } from "uuid";
import AddNewUser from "./AddNewUser";
import  useToggle  from '../hooks/useToggle'

const Users = () => {
    const [isEnabled,toggle]=useToggle()

    const [users,setUsers] = useState([
    {
        id: uuid(),
        name: "Ahmed",
        age: 29,
    },
    {
        id: uuid(),
        name: "Mustafa",
        age: 30,
    },
    {
        id: uuid(),
        name: "Ali",
        age: 28,
    },
    {
        id: uuid(),
        name: "Mohamed",
        age: 12,
    },
    ]); 
    const incrementUserAge=(userId)=>{
        // const newuser ={id:uuid(),name:'steven',age:19};
        // const currentUsers=[...users];
        // currentUsers.push(newuser);
        // setUsers(currentUsers);
        // console.log(users)
        setUsers(currentUsers=>currentUsers.map(user=>user.id===userId? {...user,age:user.age+1}:user))
    
    }
    const addUser=(user)=>{
        setUsers(currentUsers=> ([...currentUsers,{...user,age:+user.age,id:uuid()}]))
    }

    // const usersAboveThirty = users.filter(user=>{
    //     console.log('RECALCULATION');
    // return user.age > 30;
    // }).length
    const usersAboveThirty=useMemo(()=>{
        return users.filter(user=>{
        console.log('RECALCULATION');
        return user.age > 30;
    }).length
    },[users]);

    return (
    <>
    <AddNewUser addUser={addUser} isEnabled={isEnabled} /> 
        <div>
        {users.map((user) => (
            <User key={user.id} {...user} onIncrement={incrementUserAge} />
        ))}
        </div>
        <div>Total Number of users that have more than 30 years is {usersAboveThirty}</div>
        <button onClick={toggle}>{isEnabled? 'Disable':'Enable'}</button>
        {/* condtional rendering */}
        {isEnabled && <div>Enabled</div>} 
        
    </>
    );
};

export default Users;