import React from 'react';
import { useState } from 'react'

const AddNewUser = (props) => {
    const{addUser} =props
    const [user,setUser]= useState({name:'',age:''})
    const handleChange=(e)=>{
        const {name,value}=e.target
        setUser(currentUser=>({...currentUser,[name]:value }))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        addUser(user)
        setUser({name:"",age:''})
    }
    return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={user.name} onChange={handleChange}/>
        <input type="number" name="age" value={user.age} onChange={handleChange  } />
        <input type="submit" value='Add User'  />
    </form>
    );
};

export default AddNewUser;