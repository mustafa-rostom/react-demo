import React from 'react';
import User from './User'
import { useState } from 'react';
import { v4 as uuid } from "uuid";
import AddNewUser from "./AddNewUser";


const Users = () => {
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
    return (
    <>
    <AddNewUser addUser={addUser} /> 
        <div>
        {users.map((user) => (
            <User key={user.id} {...user} onIncrement={incrementUserAge} />
        ))}
        </div>
    </>
    );
};

export default Users;